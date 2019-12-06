import React, { useEffect } from 'react';

import MenuCustom from './Menu';
import { StyledRoot, StyledToolBar, StyledMenuOpenIcon, StyledMenuIcon } from './styled';


export default function ({ screen, openDrawer, setOpenDrawer, history }) {
    
    useEffect(() => {
        setOpenDrawer(screen.width > 800);
    }, [screen, setOpenDrawer]);

    return (
        <StyledRoot>
            <StyledToolBar>
                {openDrawer ?
                    <StyledMenuOpenIcon onClick={() => setOpenDrawer(!openDrawer)} />
                    :
                    <StyledMenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
                }
            </StyledToolBar>

            <MenuCustom history={history} />
        </StyledRoot>
    );
};


