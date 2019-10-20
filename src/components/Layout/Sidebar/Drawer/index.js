import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import useStyles from './styles';


export default function DrawerCustom({ screen, children }) {
    const { drawerPaper, drawerPaperClose, openSideBar } = useStyles();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(screen.width > 500);
    }, [screen]);

    return (
        <Drawer
            variant="permanent"
            open={open}
            classes={{
                paper: clsx(
                    drawerPaper,
                    !open && drawerPaperClose
                )
            }}
        >
            <div style={{ flexGrow: 1 }}>
                {
                    React.Children.map(children, child => {
                        return React.cloneElement(child, {
                            ...child.props, open
                        });
                    })
                }
            </div>
            <Divider />
            <div className={openSideBar}>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <ArrowLeft /> : <ArrowRight />}
                </IconButton>
            </div>
        </Drawer>
    );
};
