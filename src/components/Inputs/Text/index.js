import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputText({ label, value, maxLength, disabled, colums, handleChange }) {
    const { grid, input } = useStyles();

    return (
        <Grid {...colums}>
            <div className={grid}>
                <TextField
                    disabled={disabled}
                    value={value}
                    className={input}
                    variant="outlined"
                    type='text'
                    margin="dense"
                    label={label}
                    inputProps={{
                        maxLength,
                    }}
                    onChange={handleChange}
                />
            </div>
        </Grid>
    );
};
