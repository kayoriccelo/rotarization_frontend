import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { DrawerSidebar, DrawerMobileSidebar } from './Drawer';
import ListSidebar from './List';


export const Sidebar = ({ openDrawer, setOpenDrawer }) => {
    const history = useHistory();
    const [openMenu, setOpenMenu] = useState(true);

    const handleClick = path => e => {
        history.push(path);
    };

    return (
        <DrawerSidebar
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
        >
            <ListSidebar
                history={history}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                handleClick={handleClick}
            />
        </DrawerSidebar >
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
        <DrawerMobileSidebar
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
        >
            <ListSidebar
                history={history}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                handleClick={handleClick}
            />
        </DrawerMobileSidebar >
    );
};
