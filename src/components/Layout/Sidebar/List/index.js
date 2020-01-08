import React from 'react';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';

import menus from '../../../../routes/menus';
import { StyledList, StyledListItem, StyledIcon, StyledTypography } from './styled';


export default function ListCustom(props) {

    const renderSubMenus = (index, menuPrimary) => (
        <>
            <ListItemSidebar
                {...menuPrimary}
                key={index}
                open={props.openMenu}
                isSubMenu={true}
                onClick={() => props.setOpenMenu(!props.openMenu)}
            />

            <Collapse in={props.openMenu} timeout="auto" unmountOnExit>
                {menuPrimary.menus.map((subItem, subIndex) => (
                    <ListItemSidebar
                        {...subItem}
                        key={subIndex}
                        open={props.openMenu}
                        isItemSubMenu={true}
                        onClick={props.handleClick(subItem.path)}
                    />
                ))}
            </Collapse>
        </>
    );

    return (
        <StyledList component="nav" aria-labelledby="nested-list-subheader">
            {menus.map((item, index) => {
                return (
                    !item.menus ? (
                        <ListItemSidebar
                            {...item}
                            isInicio={index === 0}
                            key={index}
                            onClick={props.handleClick(item.path)}
                        />
                    ) : renderSubMenus(index, item)
                )
            })}
        </StyledList>
    );
};

const ListItemSidebar = props => {
    const { key, icon, title, isSubMenu, isItemSubMenu, open, isInicio } = props;
    const { onClick } = props;

    return (
        <StyledListItem
            button
            key={key + 1}
            onClick={onClick}
            isInicio={isInicio}
            isItemSubMenu={isItemSubMenu}
        >
            {icon && <StyledIcon> {icon} </StyledIcon>}

            <StyledTypography isSubMenu={isSubMenu}>{title}</StyledTypography>

            {isSubMenu && (open ? <ExpandLess /> : <ExpandMore />)}
        </StyledListItem >
    );
};