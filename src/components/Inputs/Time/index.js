import React from 'react';
import { TextField, Grid } from '@material-ui/core';

import useStyles from './styles';


export default function InputTime({ fieldName, value, label, colums, handleChange }) {
    const { grid, input } = useStyles();

    return (
        <Grid {...colums}>
            <div className={grid}>
                <TextField
                    value={value}
                    className={input}
                    inputProps={{ step: 300 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="time"
                    variant="outlined"
                    margin="dense"
                    label={label}
                    onChange={e => handleChange(fieldName)(e)}
                />
            </div>
        </Grid>
    );
};
