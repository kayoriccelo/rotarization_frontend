import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';

import { StyledGrid } from './styled';


export default function CheckboxCustom({ fieldName, value, label, columns, handleChange }) {
    return (
        <Grid {...columns}>
            <StyledGrid>
                <FormControlLabel
                    label={label}
                    control={
                        <Checkbox
                            checked={value}
                            onChange={(e) => handleChange({ target: { value: e.target.checked } }, fieldName)}
                            value={fieldName}
                            color="primary"
                        />
                    }
                />
            </StyledGrid>
        </Grid>
    );
};