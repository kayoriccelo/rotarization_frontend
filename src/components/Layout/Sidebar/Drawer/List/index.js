import React from 'react';
import { List, ListSubheader } from '@material-ui/core';


export default function ListCustom({ children, open, className }) {
    return (
        <List
            className={className}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={open &&
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                >
                    Aplicação
                </ListSubheader>
            }
        >
            {children}
        </List>
    );
};
