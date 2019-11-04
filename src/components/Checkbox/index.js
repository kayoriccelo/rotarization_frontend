import React from 'react';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './styles';


export default function CheckboxCustom({ fieldName, value, label, colums, handleChange }) {
    const { grid } = useStyles();

    return (
        <Grid {...colums}>
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