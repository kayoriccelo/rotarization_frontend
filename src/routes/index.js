import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RouteCustom from '../components/Route';
import { loadUser } from '../auth/store/ducks';
import routes from './routes';

export { routes };


const PrivateRoute = ({ user, component: Component, path, history, loadUser, ...rest }) => {
    useEffect(() => {
        (localStorage.getItem('access') && !user.isAuthenticated) && loadUser(history)
    }, [user, history, loadUser]);

    return (
        <Route {...rest} render={props =>
            user.isAuthenticated ? (
                (path !== '/' && path !== '/dashboard') ? (
                    <RouteCustom>
                        <Component {...props} />
                    </RouteCustom>
                ) : (
                        <Component {...props} />
                    )
            ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )}
        />
    );
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
