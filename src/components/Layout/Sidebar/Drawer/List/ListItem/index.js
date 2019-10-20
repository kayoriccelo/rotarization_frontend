import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


export default function ListItemCustom(props) {
    return (
        <ListItem
            button
            key={props.key + 1}
            onClick={props.onClick}
            className={props.className}
        >

            {props.icon && <ListItemIcon> {props.icon} </ListItemIcon>}

            <ListItemText primary={!props.open && props.label} />

            {props.isSubMenu && (props.open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem >
    );
};
