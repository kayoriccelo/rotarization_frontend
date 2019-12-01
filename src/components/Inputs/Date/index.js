import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledGrid, StyledInput } from '../styled';


export default function InputDate({ value, label, columns, disabled, handleChange }) {
    return (
        <Grid {...columns}>
            <StyledGrid>
                <StyledInput
                    label={label}
                    variant="outlined"
                    type="date"
                    margin="dense"
                    value={value}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true, }}
                    disabled={disabled}
                />
            </StyledGrid>
        </Grid>
    );
};
