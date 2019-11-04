import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputTime({ fieldName, value, label, handleChange }) {
    const classes = useStyles();

    return (
        <TextField
            className={classes.textField} InputLabelProps={{ shrink: true }}
            value={value}
            inputProps={{ step: 300 }}
            type="time"
            variant="outlined"
            margin="dense"
            label={label}
            onChange={e => handleChange(fieldName)(e)}
        />
    );
};
