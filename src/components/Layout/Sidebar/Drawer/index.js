import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider } from '@material-ui/core';
import useStyles from './styles';


export default function DrawerCustom({ openDrawer, children }) {
    const { drawerPaper, drawerPaperClose } = useStyles();

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
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        ...child.props, openDrawer
                    });
                })}
            </div>

            <Divider />
        </Drawer>
    );
};
