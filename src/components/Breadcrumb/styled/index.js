import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';
import { Dashboard, WhatshotIcon, GrainIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export const StyledPaper = styled(Paper)`
    padding: 8px;
`;

export const StyledLink = styled(Link)`
    display: flex
`;

export const StyledTypography = styled(Typography)`
    display: flex
`;

const styleIcon = `
    margin-right: 2px;
    width: 20px;
    height: 20px;
`;

export const StyledDashboard = styled(Dashboard)`
    ${styleIcon}
`;

export const StyledWhatshot = styled(WhatshotIcon)`
    ${styleIcon}
`;

export const StyledGrain = styled(GrainIcon)`
    ${styleIcon}
`;
