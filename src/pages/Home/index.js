import React from 'react';

import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
// import { Message } from '../../components';
import useStyles from './styles';


export default function Home({ history }) {
    const { root, main } = useStyles();

    return (
        <div className={root}>
            <Sidebar history={history} />
            <div className={main}>
                <Header history={history} />

                <Content history={history} />
            
                <Footer />
            </div>
        </div>
    );
};
