import styled from 'styled-components';
import { Paper, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


export const StyledRoot = styled.div`
    margin: 15px 2px 15px 2px;
`;

export const StyledPaper = styled(Paper)`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    padding: 2px 4px;
`;

export const StyledInputBase = styled(InputBase)`
    width: 100%;
    padding: 2px 4px;
`;

export const StyledButtonAdd = styled(Button)`
    background-color: #40bf40!important;
    color: white!important;
    padding: 2px!important;
    margin-right: 2px!important;
`;
