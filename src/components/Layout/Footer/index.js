import React from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';


export default function Header() {
    const { root, textSecondary } = useStyles();

    return (
        <div className={root}>
            <Container maxWidth="sm">
                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    className={textSecondary}>
                    {'Copyright © '}
                    <a
                        href="https://www.linkedin.com/in/kayoriccelo/"
                        style={{ color: 'white', fontWeight: 'bold' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kayo Riccelo
                    </a>
                    {' 2019'}
                </Typography>
            </Container>
        </div>
    );
};
