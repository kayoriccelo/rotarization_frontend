import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import { StyledRoot } from './styled';
import PrivateRoute, { routes } from '../../../routes';


const Content = ({ user }) => {
    return (
        <StyledRoot>
            <Switch>
                {routes.map(route => {
                    if (route.roles.indexOf(user.role) > -1) {
                        return <PrivateRoute
                            {...route}
                        />
                    };

                    return false
                })}

                <Redirect from="/" to="/dashboard" />
            </Switch>
        </StyledRoot>
    );
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
export default connect(mapStateToProps, null)(Content);
