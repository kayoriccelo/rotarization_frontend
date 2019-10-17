import React, { useState, useEffect } from 'react';

import {
    ContainerSign as Container, BannerSign as Banner
} from '../../components';
import Form from './Form';


const SignIn = ({ history }) => {
    // states
    const [width, setWidth] = useState(0);

    // effects
    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, []);

    // others
    const updateWindowDimensions = () => setWidth(window.innerWidth);

    // render
    return (
        <Container>
            {width >= 750 && <Banner />}
            <Form history={history} />
        </Container>
    );
};


export default SignIn;
