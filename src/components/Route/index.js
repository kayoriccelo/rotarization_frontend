import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUser } from '../../auth/store/ducks';
import routes from '../../routes/index';
import {
    StyledRoot, StyledMain, StyledContentTitle, StyledTitle, StyledSubTitle, StyledBorder, StyledContent
} from './styled';

export { routes };


const PrivateRoute = ({ user, routePrivate, component: Component, path, history, loadUser, ...rest }) => {

    useEffect(() => {
        (localStorage.getItem('access') && !user.isAuthenticated) && loadUser(history)
    }, [user, history, loadUser]);

    return (
        <Route {...rest} render={props =>
            user.isAuthenticated ? (
                (path !== '/' && path !== '/dashboard') ? (
                    <StyledRoot>
                        <StyledMain>
                            <StyledContentTitle>
                                <StyledTitle children={routePrivate.title} />

                                <StyledSubTitle children={routePrivate.subTitle} />
                            </StyledContentTitle>

                            <StyledBorder>
                                <StyledContent>
                                    <Component {...props} />
                                </StyledContent>
                            </StyledBorder>
                        </StyledMain>
                    </StyledRoot>
                ) : <Component {...props} />
            ) : <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />}
        />
    );
};


const mapStateToProps = ({ auth, routePrivate }) => ({ user: auth.user, routePrivate: routePrivate });
const mapDispatchToProps = dispatch => bindActionCreators({ loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
