import React from 'react';
import { Grid, Button } from '@material-ui/core';

import useStyles from './styles';


export default function Submit({ label, onSubmit }) {
    const { grid, div, button } = useStyles();

    return (
        <Grid className={grid}>
            <div className={div}>
                <Button
                    variant="contained"
                    className={button}
                    onClick={() => onSubmit()}
                >
                    {label}
                </Button>
            </div>
        </Grid>
    );
};
