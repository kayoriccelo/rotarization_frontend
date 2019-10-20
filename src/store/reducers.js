import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import paginationReducer from '../components/List/Pagination/store/ducks';

import signInReducer from '../pages/SignIn/store/ducks';
import signUpReducer from '../pages/SignUp/store/ducks';


const reducers = combineReducers({
    router: routerReducer,

    pagination: paginationReducer,

    signin: signInReducer,
    signup: signUpReducer,
});

export default reducers;
