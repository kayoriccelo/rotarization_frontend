import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


export const StyledRoot = styled.div`
    margin: 8px 2px 12px 8px;
    display: flex;
    justify-content: space-between;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    padding: 2px 0px!important;
    height: 20px!important;
    width: 20px!important;
    color: #74788d!important;
`;

export const StyledInput = styled(TextField)`
    width: calc(100vh - 200px)!important;
    &:focus {
        outline: 2px dashed blue!important;
    }
`;

export const StyledButtonAdd = styled(Button)`
    background-color: #55C39E!important;
    color: white!important;
    padding: 2px!important;
    margin-right: 2px!important;
    height: 30px!important;
    &:hover {
        background-color: #159270!important;
    }
`;
