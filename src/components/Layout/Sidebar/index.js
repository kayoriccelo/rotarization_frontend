import React, { useState } from 'react';
import { Collapse, Divider } from '@material-ui/core';

import DrawerCustom from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';
import { StyledContentLogo, StyledImageLogo, StyledTitleLogo } from './styled';


export default function Sidebar({ history, openDrawer }) {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <DrawerCustom
            openDrawer={openDrawer}
        >
            <StyledContentLogo openDrawer={openDrawer}>
                <StyledImageLogo
                    src={require('../../../assets/images/logo.png')}
                    alt="logo"
                />

                <StyledTitleLogo openDrawer={openDrawer}>
                    Controle de Rotas
                </StyledTitleLogo>
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
                                    <Divider />

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
        </DrawerCustom>
    );
};
