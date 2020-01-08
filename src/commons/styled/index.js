import styled from 'styled-components';


export const StyledContentLogo = styled.div`
    display: flex;
    flex-direction: ${props => props.openDrawer ? 'column' : 'row'};
    padding: ${props => props.openDrawer ? '40px 0px 40px 75px' : '10px'};
    ${props => !props.openDrawer && 'padding-left: 4px'}
    transition: all .60s ease;
`;

export const StyledImageLogo = styled.img`
    width: 33px;
`;

export const StyledLogo = styled.div`
    border-radius: 25px 10px 25px 10px;
    border: 8px outset #005074;
    padding: 2px 5px 6px 2px;
    margin-left: ${props => props.openDrawer ? '38px;' : '0px'};
    height: 28px;
    width: 28px;
`;

export const StyledTitleLogo = styled.div`
    display: block; 
    font-size: 100%; 
    font-weight: bold;
    margin-top: ${props => props.openDrawer ? '10px' : '20px'};
    ${props => !props.openDrawer && 'padding-left: 20px'}
    transition: all .60s ease;
`;
