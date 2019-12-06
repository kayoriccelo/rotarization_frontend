import styled from 'styled-components';


export const StyledContentLogo = styled.div`
    display: flex;
    flex-direction: ${props => props.openDrawer ? 'column' : 'row'};
    align-items: center;
    ${props => props.openDrawer && 'justify-content: center;'}
    height: ${props => props.openDrawer ? '150px' : '80px'};
    ${props => !props.openDrawer && 'padding-left: 4px'}
`;

export const StyledImageLogo = styled.img`
    width: 33px;
`;

export const StyledLogo = styled.div`
    border-radius: 25px 10px 25px 10px;
    border: 8px outset #005074;
    padding: 2px 5px 6px 2px;
    height: 28px;
    width: 28px;
`;

export const StyledTitleLogo = styled.div`
    display: block; 
    font-size: 100%; 
    font-weight: bold;
    margin-top: 10px;
    ${props => !props.openDrawer && 'padding-left: 20px'}
`;
