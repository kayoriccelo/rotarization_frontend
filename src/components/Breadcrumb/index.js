import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Dashboard from '@material-ui/icons/Dashboard';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import useStyles from './styles';


function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function () {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/" className={classes.link}>
                    <Dashboard className={classes.icon} />
                    Início
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    <WhatshotIcon className={classes.icon} />
                    Core
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
        </Paper>
    );
};
