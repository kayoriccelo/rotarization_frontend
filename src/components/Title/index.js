import React from 'react';
import { StyledTitle } from './styled';


export default function ({ iconTitle: Component, title }) {
    
    return (
        <StyledTitle>
            <Component style={{ padding: '0px 8px 4px 0px' }}/> {title}
        </StyledTitle>
    );
};