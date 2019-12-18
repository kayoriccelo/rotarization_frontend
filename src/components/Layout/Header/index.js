import React from 'react';

import MenuCustom from './Menu';
import { StyledRoot, StyledToolBar, StyledMenuOpenIcon, StyledMenuIcon } from './styled';


export default function ({ openDrawer, setOpenDrawer }) {

    return (
        <StyledRoot>
            <StyledToolBar>
                {openDrawer ?
                    <StyledMenuOpenIcon onClick={() => setOpenDrawer(!openDrawer)} />
                    :
                    <StyledMenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
                }
                <MenuCustom />
            </StyledToolBar>
        </StyledRoot>
    );
};


