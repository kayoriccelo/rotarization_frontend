import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledGrid, StyledInput } from '../styled';


export default function InputTime({ value, label, columns, handleChange }) {
    return (
        <Grid {...columns}>
            <StyledGrid>
                <StyledInput
                    value={value}
                    inputProps={{ step: 300 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="time"
                    variant="outlined"
                    margin="dense"
                    label={label}
                    onChange={handleChange}
                />
            </StyledGrid>
        </Grid>
    );
};
