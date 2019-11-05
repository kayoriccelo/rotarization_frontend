import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './styles';


export default function CheckboxCustom({ fieldName, value, label, columns, handleChange }) {
    const { grid } = useStyles();

    return (
        <Grid {...columns}>
            <div className={grid}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value}
                            onChange={(e) => {
                                handleChange({ target: { value: e.target.checked } }, fieldName)
                            }}
                            value={fieldName}
                            color="primary"
                        />
                    }
                    label={label}
                />
            </div>
        </Grid>
    );
};