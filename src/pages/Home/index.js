import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDimensions } from '../../commons/useful';
import Header from '../../components/Layout/Header';
import { Sidebar, SidebarMobile } from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import { Message } from '../../components';
import { StyledRoot, StyledMain, StyledMainMobile } from './styled';

import { loadUser } from '../../auth/store/ducks';

export function Home({ user, loadUser }) {
    const [screen, setScreen] = useState({ width: 0 });
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));
        loadUser();

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, [loadUser]);

    useEffect(() => setOpenDrawer(screen.width > 800), [screen, setOpenDrawer]);

    return (
        <>
            {screen.width >= 800 ? (
                user.isAuthenticated && <StyledRoot>
                    <Sidebar
                        openDrawer={openDrawer}
                        setOpenDrawer={setOpenDrawer}
                    />
                    <StyledMain openDrawer={openDrawer}>
                        <Header
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                        />

                        <Content />

                        <Footer />
                    </StyledMain>
                </StyledRoot>
            ) : (
                    user.isAuthenticated && <StyledRoot>
                        <SidebarMobile
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                        />
                        <StyledMainMobile openDrawer={!openDrawer}>
                            <Header
                                openDrawer={openDrawer}
                                setOpenDrawer={setOpenDrawer}
                            />

                            <Content />

                            <Footer />
                        </StyledMainMobile>
                    </StyledRoot>
                )}
            <Message />
        </>
    );
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
