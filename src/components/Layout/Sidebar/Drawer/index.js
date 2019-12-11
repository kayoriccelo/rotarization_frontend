import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider } from '@material-ui/core';

import useStyles from './styles';
import {
    StyledContentLogo, StyledLogo, StyledImageLogo, StyledTitleLogo
} from '../../../../commons/styled';


export const DrawerCustom = ({ children, openDrawer, setOpenDrawer }) => {
    const { drawerPaper, drawerPaperClose } = useStyles();

    return (
        <Drawer
            variant="permanent"
            open={openDrawer}
            classes={{
                paper: clsx(
                    drawerPaper,
                    !openDrawer && drawerPaperClose
                )
            }}
        >
            <div style={{ flexGrow: 1 }}>
                <StyledContentLogo openDrawer={openDrawer}>
                    <StyledLogo children={
                        <StyledImageLogo
                            src={require('../../../../assets/images/logo.png')}
                            alt="logo"
                        />}
                    />

                    <StyledTitleLogo openDrawer={openDrawer} children={'Controle de Rotas'} />
                </StyledContentLogo>

                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        ...child.props, openDrawer
                    });
                })}
            </div>

            <Divider />
        </Drawer>
    );
};

export const DrawerMobileCustom = ({ children, openDrawer, setOpenDrawer }) => {
    const { drawerPaper } = useStyles();

    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(!openDrawer)}
            classes={{ paper: clsx(drawerPaper) }}
        >
            <div style={{ flexGrow: 1 }}>
                <StyledContentLogo openDrawer={true}>
                    <StyledLogo children={
                        <StyledImageLogo
                            src={require('../../../../assets/images/logo.png')}
                            alt="logo"
                        />}
                    />

                    <StyledTitleLogo openDrawer={true} children={'Controle de Rotas'} />
                </StyledContentLogo>

                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        ...child.props, openDrawer
                    });
                })}
            </div>

            <Divider />
        </Drawer>
    );
};
