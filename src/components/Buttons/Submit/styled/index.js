import styled from 'styled-components';
import { Grid, Button } from '@material-ui/core';

import commonStyles from '../../../../commons/styles';


export const StyledGrid = styled(Grid)`
    width: 100%;
    padding: 0px 4px;
`;

export const StyledButton = styled(Button)`
    margin-top: 20px!important;
    width: 100%!important;
    color: ${commonStyles.primaryColor}!important;
    background-color: ${commonStyles.buttonPrimary}!important;
    &:hover fieldset{
        background-color: ${commonStyles.buttonPrimaryHover};
    },
`;
