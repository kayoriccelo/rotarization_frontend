import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { StyledListItem } from '../styled';


export default function ListItemCustom(props) {
    return (
        <StyledListItem
            button
            key={props.key + 1}
            onClick={props.onClick}
        >
            {props.icon && <ListItemIcon> {props.icon} </ListItemIcon>}

            <ListItemText primary={props.label} />

            {props.isSubMenu && (props.open ? <ExpandLess /> : <ExpandMore />)}
        </StyledListItem >
    );
};
