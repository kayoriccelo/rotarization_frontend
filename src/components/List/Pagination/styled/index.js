import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


export const StyledRoot = styled.div`
    flex-shrink: 0;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const StyledIconButton = styled(IconButton)`
    height: 30px!important;
    width: 30px!important;
    background-color: rgba(0, 110, 156, 0.69)!important;
    color: #ffffff!important;
    border-radius: 4px!important;
    margin: 2px!important;
    transition: all .50s ease!important;
    &:hover {
        background-color: 006b99!important;
    },
    ,
    ${props => props.disabled && `
        background-color: 006b99!important;
        opacity: 0.6!important;`}
`;

const style = `
    margin: -12px!important;
`;

export const StyledFirstPageIcon = styled(FirstPageIcon)`
    ${style}
`;

export const StyledKeyboardArrowLeft = styled(KeyboardArrowLeft)`
    ${style}
`;

export const StyledKeyboardArrowRight = styled(KeyboardArrowRight)`
    ${style}
`;

export const StyledLastPageIcon = styled(LastPageIcon)`
    ${style}
`;
