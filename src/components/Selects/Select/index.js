import React, { useState, useEffect, useRef } from 'react';
import { Grid, OutlinedInput, InputLabel, MenuItem, Select } from '@material-ui/core';

import { StyledGrid, StyledControl } from '../styled';


export default function SelectCustom(props) {
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const { label, values, fieldName, columns, options, handleChange } = props;

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <Grid {...columns}>
            <StyledGrid>
                <StyledControl
                    key="type"
                    variant="outlined"
                >
                    <InputLabel
                        ref={inputLabel}
                        htmlFor="outlined-type-simple"
                    >
                        {label}
                    </InputLabel>
                    <Select
                        value={values[fieldName]}
                        onChange={(e) => handleChange(e, fieldName)}
                        input={
                            <OutlinedInput
                                labelWidth={labelWidth}
                                name="select"
                                id="outlined-select-simple"
                            />
                        }
                    >
                        {options.map(option => (
                            <MenuItem
                                key={`${option.key}`}
                                value={`${option.value}`}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </StyledControl>
            </StyledGrid>
        </Grid>
    );
};
