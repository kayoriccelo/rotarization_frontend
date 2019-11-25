import styled from 'styled-components';

import commonStyles from '../../../commons/styles';


export const StyledRoot = styled.div`
    background: ${commonStyles.backgroundColor};
    height: 200px;
    width: 100%;
`;

export const StyledMain = styled.div`
    padding: 15px 22px 0px 22px;
`;

export const StyledContentTitle = styled.div`
    height: 40px;
`;

export const StyledTitle = styled.div`
    color: ${commonStyles.primaryColor};
    font-size: 16px;
    font-family: Arial;
    max-height: 25px;
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
    height: calc(100vh - 180px);
    box-shadow: 7px 7px 10px -8px rgba(0,0,0,0.75);
`;
