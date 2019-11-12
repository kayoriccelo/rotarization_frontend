import React from 'react';
import { Grid, Button } from '@material-ui/core';

import useStyles from './styles';


export default function Submit({ label, onSubmit }) {
    const { grid, button } = useStyles();

    return (
        <Grid className={grid}>
            <Button
                variant="contained"
                className={button}
                onClick={() => onSubmit()}
            >
                {label}
            </Button>
        </Grid>
    );
};
