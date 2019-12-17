import styled, { keyframes } from 'styled-components';
import { Grid } from '@material-ui/core';


export const StyledMain = styled(Grid)`
    overflow-y: auto!important;
    background-color: #f2f3f8!important;
    padding: 10px!important;
    display: flex;
`;

export const StyledGrid = styled(Grid)`
    height: 100%!important;
`;

const keyframeRoot = keyframes`
    0% {
        transform: translateY(-500px);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    38% {
        transform: translateY(0);
        animation-timing-function: ease-out;
        opacity: 1;
    }
    55% {
        transform: translateY(-65px);
        animation-timing-function: ease-in;
    }
    72% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    81% {
        transform: translateY(-28px);
        animation-timing-function: ease-in;
    }
    90% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
    95% {
        transform: translateY(-8px);
        animation-timing-function: ease-in;
    }
    100% {
        transform: translateY(0);
        animation-timing-function: ease-out;
    }
`;

export const StyledCard = styled.div`
    background-color: white;
    margin: 6px;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.75);
    -webkit-animation: ${keyframeRoot} 1.1s both;
    animation: ${keyframeRoot}  1.1s both;
`;

export const StyledTitle = styled.div`
    font-size: 12px; 
    text-align: left;
    padding-left: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    margin: 4px;
`;

export const StyledTitleFooter = styled.div`
    font-size: 12px;
    text-align: center; 
`;

export const StyledLoading = styled.div`
    display: flex;
    flex-direction: flex-end;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;