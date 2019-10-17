import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import commonStyles from '../../../../commons/styles/';


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


const useStyles = makeStyles({
    container: {
        height: '100%',
        width: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: commonStyles.primaryColor,
        alignItems:"center",
        justify:"center"
    },
});
