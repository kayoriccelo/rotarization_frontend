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
    padding: 0px 20px 0px 20px;
    color: #8c8c8c;
    &:hover {
        background-color: #d9d9d9;
        cursor: pointer;
    };
`;

export const StyledAvatar = styled(Avatar)`
    height: 40px;
    width: 40px;
    margin: 5px 10px 5px 0px;
    background-color: #8c8c8c;
`;

export const StyledGrow = styled(Grow)`
    transform-origin: ${props => props.placement === 'bottom' ? 'center top' : 'center bottom'};
`;

export const StyleName = styled.div`
    color: #404040;
    font-size: 10px;
    font-weight: bold;
`;
