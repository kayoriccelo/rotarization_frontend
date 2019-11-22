import React from 'react';

import { StyledGrid, StyledButton } from './styled';


export default function Submit({ label, onSubmit }) {
    return (
        <StyledGrid>
            <StyledButton
                variant="contained"
                onClick={() => onSubmit()}
            >
                {label}
            </StyledButton>
        </StyledGrid>
    );
};
