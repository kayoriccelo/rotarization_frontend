import styled from 'styled-components';
import { Card, TableCell } from '@material-ui/core';


export const StyledRoot = styled.div`
    overflow: auto;
    margin: 2px;
`;

export const StyledCard = styled(Card)`
    height: calc(100vh - 280px);
    min-width:  calc(100vh - 180px);
    ${props => props.is_pagination ?
        'overflow: auto;'
        :
        'overflow-x: auto; overflow-y: visible;'
    }
`;

export const StyledTableCell = styled(TableCell)`
    font-weight: bold;
    font-size: 14px;
    font-style: italic;
    color: black;
`;

const status = `
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.75);
`;

export const StyledStatusPedding = styled.div`
    ${status}
    background-color: #ff9800;
`;

export const StyledStatusInProgress = styled.div`
    ${status}
    background-color: #3f51b5;
`; 

export const StyledStatusDisregarded = styled.div`
    ${status}
    background-color: #ff1a6a;
`; 

export const StyledStatusCompleted = styled.div`
    ${status}
    background-color: #4caf50;
`; 