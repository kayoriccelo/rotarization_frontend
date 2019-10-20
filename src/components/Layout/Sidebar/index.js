import React, { useState } from 'react';
import { Collapse, Divider } from '@material-ui/core';

import DrawerCustom from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';
import useStyles from './styles';


export default function Sidebar({ screen, history }) {
    const { menu, subMenu } = useStyles();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* TODO: Kayo Riccelo - Incluir alguma Logo */}
            <DrawerCustom screen={screen} >
                <ListCustom>
                    {
                        menus.map((item, index) => {
                            return !item.menus ? (
                                <ListItemCustom
                                    key={index}
                                    label={item.title}
                                    icon={item.icon}
                                    className={menu}
                                    onClick={() => history.push(item.pathName)}
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
                                                            onClick={() => history.push(sub_item.pathName)}
                                                        />
                                                    )
                                                })
                                            }
                                            
                                            <Divider />
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
