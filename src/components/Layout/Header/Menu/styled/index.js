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
    height: 36px;
    margin: 12px!important;
    color: white!important;
    background: linear-gradient(to right, #67a6cb 0%, #549bc4 100%)!important;
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.90)!important;
    cursor: pointer;
    &:hover {
        background: linear-gradient(to right, #549bc4 0%, #549bc4 100%)!important;
    };
`;

export const StyledAvatar = styled(Avatar)`
    height: 26px!important;
    width: 26px!important;
    margin-left: 8px!important;
    background-color: #67a6cb!important;
    align-items: center;
    justify-content: center;
`;

export const StyledGrow = styled(Grow)`
    transform-origin: ${props => props.placement === 'bottom' ? 'center top' : 'center bottom'};
`;

export const StyleName = styled.div`
    font-size: 10px;
    font-weight: bold;
`;
