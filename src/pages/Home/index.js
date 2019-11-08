import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateDimensions } from '../../commons/useful';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import { Message } from '../../components';
import useStyles from './styles';

import { loadUser } from '../../auth/store/ducks';

export function Home({ user, history, loadUser }) {
    const { root, main } = useStyles();
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));
        loadUser();

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);

    return (
        user.isAuthenticated && <div className={root}>
            <Sidebar history={history} screen={screen} />

            <div className={main}>
                <Header history={history} />

                <Content history={history} />

                <Footer />
            </div>
            <Message />
        </div>
    );
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
