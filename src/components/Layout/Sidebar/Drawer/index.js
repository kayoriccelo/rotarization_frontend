import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import useStyles from './styles';


export default function DrawerCustom({ openDrawer, setOpenDrawer, children }) {
    const { drawerPaper, drawerPaperClose, openSideBar } = useStyles();

    return (
        <Drawer
            variant="permanent"
            open={openDrawer}
            classes={{
                paper: clsx(
                    drawerPaper,
                    !openDrawer && drawerPaperClose
                )
            }}
        >
            <div style={{ flexGrow: 1 }}>
                {
                    React.Children.map(children, child => {
                        return React.cloneElement(child, {
                            ...child.props, openDrawer
                        });
                    })
                }
            </div>
            <Divider />
            <div className={openSideBar}>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                    {openDrawer ? <ArrowLeft /> : <ArrowRight />}
                </IconButton>
            </div>
        </Drawer>
    );
};
