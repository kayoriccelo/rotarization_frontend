import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputDate({ value, label, colums, handleChange }) {
    const { grid, input } = useStyles();

    return (
        <Grid {...colums}>
            <div className={grid}>
                <TextField
                    label={label}
                    className={input}
                    variant="outlined"
                    type="date"
                    margin="dense"
                    value={value}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true, }}
                />
            </div>
        </Grid>
    );
};
