import styled from 'styled-components';


export const StyledContentLogo = styled.div`
    display: flex;
    align-items: center;
    ${props => props.openDrawer && 'justify-content: center;'}
    height: ${props => props.openDrawer ? '150px' : '80px'};
    padding-left: ${props => props.openDrawer ? '0px' : '8px'};
`;

export const StyledImageLogo = styled.img`
    width: 50px;
`;

export const StyledTitleLogo = styled.div`
    display: block; 
    font-size: 100%; 
    font-weight: bold;
    margin-top: 10px;
    ${props => !props.openDrawer && 'padding-left: 20px'}
`;
