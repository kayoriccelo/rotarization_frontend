import React from 'react';

import { StyledList } from './styled';


export default function ListCustom({ children }) {
    return (
        <StyledList
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {children}
        </StyledList>
    );
};
