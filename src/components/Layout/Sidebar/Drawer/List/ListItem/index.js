import React from 'react';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { StyledListItem } from '../styled';


export default function ListItemCustom(props) {
    const { key, icon, label, isSubMenu, open} = props;
    const { onClick } = props;

    return (
        <StyledListItem
            button
            key={key + 1}
            onClick={onClick}
        >
            {icon && <ListItemIcon> {icon} </ListItemIcon>}

            <ListItemText primary={label} />

            {isSubMenu && (open ? <ExpandLess /> : <ExpandMore />)}
        </StyledListItem >
    );
};
