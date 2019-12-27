import { List, ListItem, Typography, ListItemIcon } from '@material-ui/core';
import styled from 'styled-components';


export const StyledList = styled(List)`
    padding: 0px!important;
    margin: 0px 2px 0px 4px!important;
`;

export const StyledListItem = styled(ListItem)`
    padding-left: 12px!important;
    height: 35px;
    transition: all .50s ease!important;
    width: calc(100% - 4px)!important;
    border-radius: 4px!important;
    color: rgba(103, 103, 103, 0.90)!important;
    &:hover {                                
        border-right: 4px solid #6c7293!important;
        padding-left: 22px!important;
    }
    &:focus {
        font-weight: bold!important;
        border-right: 4px solid #6c7293!important;
        color: #6c7293!important;
    }
    ${props => props.isInicio ? `
        font-weight: bold!important;
        color: white!important;
        background-color: #0abb87!important;` : 
        
        !props.isItemSubMenu ? 'background-color: #f4f9fc!important;' : 
        `background: linear-gradient(to right, #f4f9fc 0%, rgb(255, 255, 255) 100%)!important;
         padding-left: 18px!important;
        `
    }
`;

export const StyledTypography = styled(Typography)`
    font-size: 12px!important;
    font-weight: inherit!important;
    padding-left: 10px!important;
    opacity: 0.85!important;
    ${props => props.isSubMenu ? 'padding-right: 110px!important' : ''}
`;

export const StyledIcon = styled(ListItemIcon)`
    min-width: 35px!important;
    color: inherit!important;
    opacity: 0.85!important;
`;