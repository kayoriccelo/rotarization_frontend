import styled from 'styled-components';
import { Card, CardMedia, Button, Avatar, Grow } from '@material-ui/core';


export const StyledCard = styled(Card)`
    max-width: 345px;
`;

export const StyledCardMedia = styled(CardMedia)`
    height: 140px;
`;

export const StyledButtonMenu = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8c8c8c;
    height: 40px;
    margin: 10px!important;
    &:hover {
        background-color: #8dbcd8!important;
        color: white!important;
        box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.90);
    };
`;

export const StyledAvatar = styled(Avatar)`
    height: 28px!important;
    width: 28px!important;
    margin-right: 10px!important;
    background-color: #8c8c8c!important;
    align-items: center;
    justify-content: center;
`;

export const StyledGrow = styled(Grow)`
    transform-origin: ${props => props.placement === 'bottom' ? 'center top' : 'center bottom'};
`;

export const StyleName = styled.div`
    font-size: 10px;
    font-weight: bold;
    &:hover {
        background-color: #8dbcd8!important;
    };
`;
