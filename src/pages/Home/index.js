import React, { useState, useEffect } from 'react';

import { updateDimensions } from '../../commons/useful';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import useStyles from './styles';


export default function Home({ history }) {
    const { root, main } = useStyles();
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);

    return (
        <div className={root}>
            <Sidebar history={history} screen={screen} />

            <div className={main}>
                <Header history={history} />

                <Content history={history} />

                <Footer />
            </div>
        </div>
    );
};
