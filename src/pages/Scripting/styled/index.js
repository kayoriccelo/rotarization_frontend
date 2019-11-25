import styled from 'styled-components';
import { Grid, List } from '@material-ui/core';


export const StyledGridContainer = styled(Grid)`
    margin-top: 10px;
`;

export const StyledContent = styled.div`
    display: flex;
`;

export const StyledSearch = styled.div`
    flex: 1;
    padding: ${props => props.direction === 'left' ? '0px 8px 8px 0px' : '0px 0px 8px 8px'};
    alignItems: ${props => props.direction === 'left' ? 'flex-end' : 'flex-start'};
`;

export const StyledMap = styled.div`
    flex: 4;
    height: calc(80vh - 250px);
    margin-top: 8px;
`;

export const StyledListLocalization = styled.div`
    flex: 1;
    height: calc(80vh - 250px);
    margin: 8px 0px 0px 8px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const StyledListEmployee = styled.div`
    flex: 2;
    padding: 8px;
`;

export const StyledSubList = styled(List)`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 14px;
    outline: none;
    text-overflow: ellipses;
    overflow: auto;
`;

export const StyledTitleLocalization = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #ddd;
`;
