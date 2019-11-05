import React, { useState, useEffect, useRef } from 'react';
import {
    Grid, OutlinedInput, InputLabel, MenuItem, FormControl, Select
} from '@material-ui/core';

import useStyles from './styles';


export default function SelectCustom(props) {
    const { grid, select } = useStyles();
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const { label, values, fieldName, columns, options, handleChange } = props;

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <Grid {...columns}>
            <div className={grid}>
                <FormControl
                    key="type"
                    variant="outlined"
                    className={select}
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
                </FormControl>
            </div>
        </Grid>
    );
};
