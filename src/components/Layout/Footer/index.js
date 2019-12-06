import React from 'react';
import { Container } from '@material-ui/core';

import { StyledRoot, StyledTypography } from './styled';


export default function Header() {
    return (
        <StyledRoot>
            <Container maxWidth="sm">
                <StyledTypography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                >
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
                </StyledTypography>
            </Container>
        </StyledRoot>
    );
};
