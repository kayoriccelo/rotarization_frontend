import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../SignIn';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/signin' component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
};
