import styled, { keyframes } from 'styled-components';

import commonStyles from '../../../commons/styles';


const keyframeRoot = keyframes`
    0% {
        transform: scaleX(2);
        filter: blur(4px);
        opacity: 0;
    }
    100% {
        transform: scaleX(1);
        filter: blur(0px);
        opacity: 1;
    }
`;

export const StyledRoot = styled.div`
    background: ${commonStyles.backgroundColor};
    height: 200px;
    width: 100%;
    -webkit-animation: ${keyframeRoot} 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    animation: ${keyframeRoot} 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;

export const StyledMain = styled.div`
    padding: 15px 22px 0px 22px;
`;

export const StyledContentTitle = styled.div`
    height: 50px;
`;

export const StyledTitle = styled.div`
    color: ${commonStyles.primaryColor};
    font-size: 16px;
    font-family: Arial;
    max-height: 25px;
    margin-left: -2px;
`;

export const StyledSubTitle = styled.div`
    color: ${commonStyles.primaryColor};
    padding-bottom: 15px;
    font-size: 12px; 
`;

export const StyledBorder = styled.div`
    border-radius: 10px;
    background-color: white;
`;

export const StyledContent = styled.div`
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    height: calc(100vh - 190px);
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.75);
`;
