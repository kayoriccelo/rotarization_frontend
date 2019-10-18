import React, { useState, useEffect } from 'react';

import {
    ContainerSign as Container, BannerSign as Banner
} from '../../components';
import { updateDimensions } from '../../commons/useful';
import Form from './Form';


const SignIn = ({ history }) => {
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);

    return (
        <Container>
            {screen.width >= 750 && <Banner />}
            <Form history={history} />
        </Container>
    );
};


export default SignIn;
