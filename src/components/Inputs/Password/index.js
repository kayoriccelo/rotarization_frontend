import React, { useState } from 'react';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';

import useStyles from './styles';


export default function InputPassword({ label, password, handleChange }) {
    const { input, margin } = useStyles();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = event => event.preventDefault();

    return (
        <TextField
            className={clsx(margin, input)}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            margin="dense"
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
