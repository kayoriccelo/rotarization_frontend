import styled from 'styled-components';
import { Grid } from '@material-ui/core';


export const StyledMain = styled(Grid)`
    overflow-y: auto!important;
    background-color: #f2f3f8!important;
    padding: 10px!important;
    display: flex;
    box-shadow: inset 1px 12px 7px -12px rgba(0,0,0,0.26);
`;

export const StyledGrid = styled(Grid)`
    height: 100%!important;
`;

export const StyledCard = styled.div`
    background-color: white;
    margin: 6px;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.75);
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