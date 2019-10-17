import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';


export default function ContainerSign({ children }) {
    const { container } = useStyles();

    return (
        <Grid
            container
            className={container}
        >
            {children}
        </Grid>
    );
};
