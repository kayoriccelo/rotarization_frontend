import React from 'react';
import { ListSubheader } from '@material-ui/core';

import { StyledList } from './styled';


export default function ListCustom({ children, open }) {
    return (
        <StyledList
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={open &&
                <ListSubheader>
                    Aplicação
                </ListSubheader>
            }
        >
            {children}
        </StyledList>
    );
};
