import React, { useState, useEffect, useRef } from 'react';
import { Grid, OutlinedInput, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import api from '../../../services/api';
import useStyles from './styles';


export default function SelectCustom(props) {
    const { grid, select } = useStyles();
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    const [options, setOptions] = useState([]);
    const { label, url, values, fieldName, displayName, columns, handleChange } = props;

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);

        api.get(url)
            .then(res => setOptions(res.data.results));
    }, [url]);

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
                        htmlFor="outlined-age-simple"
                    >
                        {label}
                    </InputLabel>

                    <Select
                        value={values[fieldName]}
                        onChange={handleChange}
                        input={
                            <OutlinedInput
                                id="outlined-select-simple"
                                labelWidth={labelWidth}
                                name="select"
                            />
                        }
                    >
                        <MenuItem
                            key="none"
                            value=""
                        >
                            <em>None</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem
                                key={`${option.id}`}
                                value={`${option.id}`}
                            >
                                {displayName ? option[displayName] : option.description}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </Grid>
    );
};
