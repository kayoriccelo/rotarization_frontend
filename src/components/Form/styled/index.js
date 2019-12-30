import styled from 'styled-components';
import { Button } from '@material-ui/core';


export const StyledCard = styled.div`
    overflow: auto;
`;

export const StyledContent = styled.div`
    overflow-x: auto;
    height: calc(100vh - 260px);
    padding: 10px 10px 10px 10px;
`;

export const StyledActions = styled.div`
    height: 40px;
    background: linear-gradient(to right, #ffffff 0%, #e6e6e6 100%);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
`;

export const StyledButtonSave = styled(Button)`
    margin: 2px!important;
    background-color: #55C39E!important;
    &:hover {
        background-color: #159270!important;
    }
`;

export const StyledButtonCancel = styled(Button)`
    margin: 2px!important;
`;