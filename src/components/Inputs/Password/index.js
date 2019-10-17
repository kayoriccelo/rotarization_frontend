import React, { useState } from 'react';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';


export default function InputPassword({ label, password, handleChange }) {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = event => event.preventDefault();


    return (
        <TextField
            className={clsx(classes.margin, classes.input)}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            label={label ? label : "Password"}
            value={password}
            onChange={handleChange}

            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};


const useStyles = makeStyles({
    input: {
        marginBottom: 20,
        width: '80%',
    },
    button: {
        width: '80%'
    }
});
