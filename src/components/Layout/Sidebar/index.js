import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';

import DrawerCustom from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';
import { StyledContentLogo, StyledLogo, StyledImageLogo, StyledTitleLogo } from '../../../commons/styled';


export default function Sidebar({ history, openDrawer }) {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <DrawerCustom openDrawer={openDrawer} >
            <StyledContentLogo openDrawer={openDrawer}>
                <StyledLogo children={
                    <StyledImageLogo
                        src={require('../../../assets/images/logo.png')}
                        alt="logo"
                    />}
                />

                <StyledTitleLogo openDrawer={openDrawer} children={'Controle de Rotas'} />
            </StyledContentLogo>

            <ListCustom>
                {menus.map((item, index) => {
                    return !item.menus ? (
                        <ListItemCustom
                            key={index}
                            label={<b>{item.title}</b>}
                            icon={item.icon}
                            onClick={() => history.push(item.path)}
                        />
                    ) : (
                            <>
                                <ListItemCustom
                                    key={index}
                                    open={openMenu}
                                    label={<b>{item.title}</b>}
                                    icon={item.icon}
                                    isSubMenu={true}
                                    onClick={() => setOpenMenu(!openMenu)}
                                />
                                <Collapse in={openMenu} timeout="auto" unmountOnExit>
                                    {item.menus.map((sub_item, sub_index) => {
                                        return (
                                            <ListItemCustom
                                                key={sub_index}
                                                label={sub_item.title}
                                                icon={sub_item.icon}
                                                isItemSubMenu={true}
                                                openMenu={openMenu}
                                                onClick={() => history.push(sub_item.path)}
                                            />
                                        )
                                    })}
                                </Collapse>
                            </>
                        )
                })}
            </ListCustom>
        </DrawerCustom >
    );
};
