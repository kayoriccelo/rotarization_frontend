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
    justify-content: flex-end;
`;

const openSide = `
    padding: 6px;
    margin: 12px 0px 12px 12px;
    border-radius: 4px;
    color: white;
    background: linear-gradient(to right, #67a6cb 0%, #549bc4 100%);
    box-shadow: 4px 4px 10px -8px rgba(0,0,0,0.90);
    cursor: pointer;
    &:hover {
        background: #549bc4; 
    },
`;

export const StyledMenuOpenIcon = styled(MenuOpenIcon)`
    ${openSide}
`;

export const StyledMenuIcon = styled(MenuIcon)`
    ${openSide}
`;
