import styled, { keyframes } from 'styled-components';

import commonStyles from '../../../commons/styles';


const keyframeRoot = keyframes`
    0% {
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
`;

export const StyledRoot = styled.div`
    background: ${commonStyles.backgroundColor};
    height: 200px;
    width: 100%;
    -webkit-animation: ${keyframeRoot} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: ${keyframeRoot} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
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
