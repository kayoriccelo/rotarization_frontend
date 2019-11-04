import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputDate({ value, label, handleChange }) {
    const { dateField } = useStyles();

    return (
        <TextField
            label={label}
            variant="outlined"
            type="date"
            margin="dense"
            className={dateField}
            value={value}
            onChange={handleChange}
            InputLabelProps={{ shrink: true, }}
        />
    );
};
