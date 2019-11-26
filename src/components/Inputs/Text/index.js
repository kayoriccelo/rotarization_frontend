import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledGrid, StyledInput } from '../styled';


export default function InputText({ label, value, maxLength, disabled, columns, handleChange }) {
    return (
        <Grid {...columns}>
            <StyledGrid>
                <StyledInput
                    disabled={disabled}
                    value={value}
                    variant="outlined"
                    type='text'
                    margin="dense"
                    label={label}
                    inputProps={{
                        maxLength,
                    }}
                    onChange={handleChange}
                />
            </StyledGrid>
        </Grid>
    );
};
