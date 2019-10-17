import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../SignIn';
import SignUp from '../SignUp';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
};
