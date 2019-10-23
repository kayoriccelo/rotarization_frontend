import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import paginationReducer from '../components/List/Pagination/store/ducks';
import messageReducer from '../components/Message/store/ducks';

import authReducer from '../auth/store/ducks';

import signInReducer from '../pages/SignIn/store/ducks';
import signUpReducer from '../pages/SignUp/store/ducks';

import companyReducer from '../pages/Company/store/ducks';


const reducers = combineReducers({
    router: routerReducer,

    pagination: paginationReducer,
    message: messageReducer,

    auth: authReducer,

    signin: signInReducer,
    signup: signUpReducer,

    company: companyReducer,
});

export default reducers;
