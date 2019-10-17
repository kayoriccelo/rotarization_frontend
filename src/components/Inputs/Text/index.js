import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function InputText({ label, value, maxLength, handleChange }) {
    const { inputText } = useStyles();

    return (
        <TextField
            className={inputText}
            value={value}
            variant="outlined"
            type='text'
            label={label}
            inputProps={{
                maxLength: maxLength,
            }}
            onChange={handleChange}
        />
    );
};


const useStyles = makeStyles({
    inputText: {
        marginBottom: 10,
        width: '80%',
    }
});
