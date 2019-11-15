import React, { useState, useEffect } from 'react';
import { Collapse, Divider } from '@material-ui/core';

import DrawerCustom from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';
import useStyles from './styles';


export default function Sidebar({ screen, history, openDrawer, setOpenDrawer }) {
    const styles = useStyles();
    const [openMenu, setOpenMenu] = useState(true);

    useEffect(() => {
        setOpenDrawer(screen.width > 800);
    }, [screen, setOpenDrawer]);

    return (
        <>
            <DrawerCustom
                setOpenDrawer={setOpenDrawer}
                openDrawer={openDrawer}
            >
                <div className={openDrawer ? styles.contentLogo : styles.contentLogoClose}>
                    <img
                        width="50px"
                        src={require('../../../assets/images/logo.png')}
                        alt="logo"
                    />
                        <div className={openDrawer ? styles.labelLogo : styles.labelLogoClose}>
                            Controle de Rotas
                        </div>
                </div>
                <ListCustom>
                    {
                        menus.map((item, index) => {
                            return !item.menus ? (
                                <ListItemCustom
                                    key={index}
                                    label={item.title}
                                    icon={item.icon}
                                    className={styles.menu}
                                    onClick={() => history.push(item.path)}
                                />
                            ) : (
                                    <>
                                        <ListItemCustom
                                            key={index}
                                            label={item.title}
                                            icon={item.icon}
                                            className={styles.menu}
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
                                                            className={styles.subMenu}
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
