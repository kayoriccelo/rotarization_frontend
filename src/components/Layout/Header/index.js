import React from 'react';

import MenuCustom from './Menu';
import { StyledRoot, StyledToolBar, StyledMenuOpenIcon, StyledMenuIcon } from './styled';


export default function ({ openDrawer, setOpenDrawer, history }) {

    return (
        <StyledRoot>
            <StyledToolBar>
                {openDrawer ?
                    <StyledMenuOpenIcon onClick={() => setOpenDrawer(!openDrawer)} />
                    :
                    <StyledMenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
                }
                <MenuCustom history={history} />
            </StyledToolBar>
        </StyledRoot>
    );
};


