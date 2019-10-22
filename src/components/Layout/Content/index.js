import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import useStyles from './styles';

import PrivateRoute, { routes } from '../../../routes';


const Content = ({ user, history }) => {
    const { root } = useStyles();

    return (
        <div className={root}>
            <Switch>
                {routes.map(route => {
                    if (route.roles.indexOf(user.role) > -1) {
                        return <PrivateRoute {...route} history={history} />
                    };

                    return false
                })}
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </div>
    );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });
export default connect(mapStateToProps, null)(Content);
