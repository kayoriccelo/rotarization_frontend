import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    Drawer, Divider, List, IconButton, ListItem, ListItemText, ListItemIcon, ListSubheader, Collapse
} from '@material-ui/core';
import { MenuBook, ArrowLeft, ArrowRight } from '@material-ui/icons';
import useStyles from './styles';


export default function DrawerCustom({ screen }) {
    const classes = useStyles();
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
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                )
            }}
        >
            <div style={{ flexGrow: 1 }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={open &&
                        <ListSubheader component="div" id="nested-list-subheader">
                            Menus
                        </ListSubheader>
                    }
                >
                    <ListItem button key={1}>
                        <ListItemIcon>
                            <MenuBook />
                        </ListItemIcon>
                        <ListItemText primary={'Testando'} />
                    </ListItem>
                </List>
            </div>
            <div style={{ marginBottom: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Divider />
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <ArrowLeft /> : <ArrowRight />}
                </IconButton>
            </div>
        </Drawer>
    );
};
