import React, { useState, useEffect } from 'react';
import { Collapse, Divider } from '@material-ui/core';

import DrawerCustom from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';
import useStyles from './styles';


export default function Sidebar({ screen, history, openDrawer, setOpenDrawer }) {
    const { menu, subMenu, contentLogo, labelLogo } = useStyles();
    const [openMenu, setOpenMenu] = useState(true);

    useEffect(() => {
        setOpenDrawer(screen.width > 500);
    }, [screen, setOpenDrawer]);

    return (
        <>
            <DrawerCustom
                setOpenDrawer={setOpenDrawer}
                openDrawer={openDrawer}
            >
                <div className={contentLogo}>
                    <img
                        width="60px"
                        src={require('../../../assets/images/logo.png')}
                        alt="logo"
                        style={{ paddingBottom: 10 }}
                    />

                    {openDrawer && (
                        <div className={labelLogo}>
                            Controle de Rotas
                        </div>
                    )}
                </div>
                <ListCustom>
                    {
                        menus.map((item, index) => {
                            return !item.menus ? (
                                <ListItemCustom
                                    key={index}
                                    label={item.title}
                                    icon={item.icon}
                                    className={menu}
                                    onClick={() => history.push(item.path)}
                                />
                            ) : (
                                    <>
                                        <ListItemCustom
                                            key={index}
                                            label={item.title}
                                            icon={item.icon}
                                            className={menu}
                                            isSubMenu={true}
                                            onClick={() => setOpenMenu(!openMenu)}
                                        />
                                        <Collapse in={openMenu} timeout="auto" unmountOnExit>
                                            <Divider />

                                            {
                                                item.menus.map((sub_item, sub_index) => {
                                                    return (
                                                        <ListItemCustom
                                                            key={sub_index}
                                                            label={sub_item.title}
                                                            icon={sub_item.icon}
                                                            isItemSubMenu={true}
                                                            openMenu={openMenu}
                                                            className={subMenu}
                                                            onClick={() => history.push(sub_item.path)}
                                                        />
                                                    )
                                                })
                                            }
                                        </Collapse>
                                    </>
                                )
                        })
                    }
                </ListCustom>
            </DrawerCustom>
        </>
    );
};
