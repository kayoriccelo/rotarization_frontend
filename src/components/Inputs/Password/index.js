import React, { useState } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Grid, IconButton, InputAdornment } from '@material-ui/core';

import { StyledGrid, StyledInput } from '../styled';


export default function InputPassword({ label, password, columns, handleChange }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = event => event.preventDefault();

    return (
        <Grid {...columns}>
            <StyledGrid>
                <StyledInput
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
            </StyledGrid>
        </Grid>
    );
};
