import React, { useState, useEffect } from 'react';

import {
    ContainerSign as Container, BannerSign as Banner
} from '../../components';
import Form from './Form';


const SignUp = ({ history }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);

        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, []);

    const updateWindowDimensions = () => setWidth(window.innerWidth);

    return (
        <Container>
            {width >= 750 && <Banner />}
            <Form history={history} />
        </Container>
    );
};


export default SignUp;
