import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Collapse } from '@material-ui/core';

import { DrawerCustom, DrawerMobileCustom } from './Drawer';
import ListCustom from './Drawer/List';
import ListItemCustom from './Drawer/List/ListItem';
import menus from '../../../routes/menus';


const ListSidebar = props => (
    <ListCustom>
        {menus.map((item, index) => {
            return !item.menus ? (
                <ListItemCustom
                    key={index}
                    label={<b>{item.title}</b>}
                    icon={item.icon}
                    onClick={props.handleClick(item.path)}
                />
            ) : (
                    <>
                        <ListItemCustom
                            key={index}
                            open={props.openMenu}
                            label={<b>{item.title}</b>}
                            icon={item.icon}
                            isSubMenu={true}
                            onClick={() => props.setOpenMenu(!props.openMenu)}
                        />
                        <Collapse in={props.openMenu} timeout="auto" unmountOnExit>
                            {item.menus.map((sub_item, sub_index) => {
                                return (
                                    <ListItemCustom
                                        key={sub_index}
                                        label={sub_item.title}
                                        icon={sub_item.icon}
                                        isItemSubMenu={true}
                                        openMenu={props.openMenu}
                                        onClick={props.handleClick(sub_item.path)}
                                    />
                                )
                            })}
                        </Collapse>
                    </>
                )
        })}
    </ListCustom>
);

export const Sidebar = ({ openDrawer, setOpenDrawer }) => {
    const history = useHistory();
    const [openMenu, setOpenMenu] = useState(true);

    const handleClick = path => e => {
        history.push(path);
    };

    return (
        <DrawerCustom
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
        >
            <ListSidebar
                history={history}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                handleClick={handleClick}
            />
        </DrawerCustom >
    );
};

export const SidebarMobile = ({ openDrawer, setOpenDrawer }) => {
    const history = useHistory();
    const [openMenu, setOpenMenu] = useState(true);

    const handleClick = path => e => {
        history.push(path);
        setOpenDrawer(!openDrawer);
    };

    return (
        <DrawerMobileCustom
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
        >
            <ListSidebar
                history={history}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                handleClick={handleClick}
            />
        </DrawerMobileCustom >
    );
};
