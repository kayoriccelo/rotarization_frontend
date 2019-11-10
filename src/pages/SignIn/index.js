import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import {
    ContainerSign as Container, BannerSign as Banner, Message
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
            {screen.width >= 750 && (
                <Grid sm={7} md={8} lg={9}>
                    <Banner />
                </Grid>
            )}
            <Grid sm={5} md={4} lg={3}>
                <Form history={history} />
            </Grid>
            <Message />
        </Container>
    );
};


export default SignIn;
