import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Home from '../Home';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
};
