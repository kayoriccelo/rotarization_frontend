import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import commonStyles from '../../../../commons/styles';


export const StyledRoot = styled.div`
    height: 30px;
    padding-top: 10px;
    background: ${commonStyles.backgroundColor}
`;

export const StyledTypography = styled(Typography)`
    color: white!important;
`;
