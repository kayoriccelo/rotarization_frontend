import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { 
    StyledPaper, StyledLink, StyledTypography, StyledDashboard, StyledWhatshot, StyledGrain
} from './styled';


function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function () {
    return (
        <StyledPaper elevation={0}>
            <Breadcrumbs aria-label="breadcrumb">
                <StyledLink to="/">
                    <StyledDashboard /> Início
                </StyledLink>

                <StyledLink
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                >
                    <StyledWhatshot /> Core
                </StyledLink>
                
                <StyledTypography color="textPrimary">
                    <StyledGrain /> Breadcrumb
                </StyledTypography>
            </Breadcrumbs>
        </StyledPaper>
    );
};
