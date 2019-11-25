import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDimensions } from '../../commons/useful';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import { Message } from '../../components';
import { StyledRoot, StyledMain } from './styled';

import { loadUser } from '../../auth/store/ducks';

export function Home({ user, history, loadUser }) {
    const [screen, setScreen] = useState({ width: 0 });
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));
        loadUser();

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, [loadUser]);


    return (
        user.isAuthenticated && <StyledRoot openDrawer={openDrawer}>
            <Sidebar
                history={history}
                openDrawer={openDrawer}
            />

            <StyledMain openDrawer={openDrawer}>
                <Header
                    screen={screen}
                    openDrawer={openDrawer}
                    setOpenDrawer={setOpenDrawer}
                    history={history}
                />

                <Content history={history} />

                <Footer />
            </StyledMain>
            <Message />
        </StyledRoot>
    );
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
