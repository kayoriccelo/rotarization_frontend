import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


export const StyledRoot = styled.div`
    flex-shrink: 0;
    margin-left: 4px;
    display: flex!important;
    align-items: center!important;
    justify-content: center!important;
`;

export const StyledIconButton = styled(IconButton)`
    height: 30px!important;
    width: 30px!important;
    background-color: rgba(0, 110, 156, 0.69)!important;
    color: #ffffff!important;
    border-radius: 4px!important;
    margin: 2px!important;
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
