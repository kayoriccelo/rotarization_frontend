import styled from 'styled-components';


export const StyledContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 100vh;
`;

export const StyledForm = styled.div`
    height: 100%;
    width: ${props => props.screen.width >= 800 ? '468px' : '100%'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledContent = styled.div`
    width: 85%;
`;

export const StyledImage = styled.img`
    width: 80px;
    height: 80px; 
    padding-bottom: 10px;
`;

export const StyledImageBanner = styled.img`
    height: ${props => props.screen.width >= 800 ? '100%' : 0};
    width: ${props => props.screen.width >= 800 ? 'calc(100% - 468px)' : 0};    
    background-repeat: no-repeat;
    background-size: cover;  
`;

export const StyledTitle = styled.div`
    display: block;
    font-size: 100%;
    font-weight: bold;
    padding-bottom: 20px;
`;
