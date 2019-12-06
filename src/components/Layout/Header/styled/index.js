import styled from 'styled-components';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';


export const StyledRoot = styled.div`
    height: 60px;
    width: 100%;
    background: #f5f5f5;
    display: flex;
`;

export const StyledToolBar = styled.div`
    flex: 1;
    display: flex;
`;

const openSide = `
    padding: 6px;
    margin: 12px;
    border-radius: 4px;
    color: #005074;
    &:hover {
        background-color: #8dbcd8; 
        cursor: pointer;
        color: white;
    },
`;

export const StyledMenuOpenIcon = styled(MenuOpenIcon)`
    ${openSide}
`;

export const StyledMenuIcon = styled(MenuIcon)`
    ${openSide}
`;
