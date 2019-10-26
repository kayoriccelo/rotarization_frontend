import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import paginationReducer from '../components/List/Pagination/store/ducks';
import messageReducer from '../components/Message/store/ducks';
import routeCustomReducer from '../components/Route/store/ducks';

import authReducer from '../auth/store/ducks';

import signInReducer from '../pages/SignIn/store/ducks';
import signUpReducer from '../pages/SignUp/store/ducks';

import companyReducer from '../pages/Company/store/ducks';
import employeeReducer from '../pages/Employee/store/ducks';
import clientReducer from '../pages/Client/store/ducks';
import localizationReducer from '../pages/Localization/store/ducks';


const reducers = combineReducers({
    router: routerReducer,

    pagination: paginationReducer,
    message: messageReducer,
    routeCustom: routeCustomReducer,

    auth: authReducer,

    signIn: signInReducer,
    signUp: signUpReducer,

    company: companyReducer,
    employee: employeeReducer,
    client: clientReducer,
    localization: localizationReducer
});

export default reducers;
