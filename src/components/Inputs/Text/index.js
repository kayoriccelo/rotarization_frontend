import React from 'react';
import { TextField } from '@material-ui/core';

import useStyles from './styles';


export default function InputText({ label, value, maxLength, handleChange }) {
    const { inputText } = useStyles();

    return (
        <TextField
            className={inputText}
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
    );
};
