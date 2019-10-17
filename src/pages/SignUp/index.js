import React from 'react';

import {
    ContainerSign as Container, BannerSign as Banner
} from '../../components';
import Form from './Form';


const SignUp = ({ history }) => {
    return (
        <Container>
            <Banner />
            <Form history={history} />
        </Container>
    );
};


export default SignUp;
