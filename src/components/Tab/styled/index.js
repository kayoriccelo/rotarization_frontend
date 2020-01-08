import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


export const StyledRoot = styled.div`
    flexGrow: 1;
    width: 100%;
    background-color: white,
`;

export const StyledTabs = styled(Tabs)`
    font-size: 0.7125rem!important;
    min-height: 30px!important;
`;

export const StyledTab = styled(Tab)`
    font-size: 0.7125rem!important;
    min-height: 30px!important;
`;
