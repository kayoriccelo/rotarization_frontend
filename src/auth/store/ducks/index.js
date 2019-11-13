import api from '../../../services/api';
import { showMessage } from '../../../components/Message/store/ducks';


export { showMessage };

export const Types = {
    USER: 'auth/USER',
    LOGOUT: 'auth/LOGOUT'
};

export const loadUser = (history) => dispatch => {
    return api.get('v1/user/')
        .then(res => {
            const user = res.data.results[0];

            dispatch({
                type: Types.USER,
                payload: {
                    ...user,
                    isAuthenticated: true,
                    role: user.is_admin ? 'admin' : 'guest'
                }
            });

            history && history.push('/');
        }, err => {
            try {
                dispatch(showMessage({
                    open: true,
                    message: err.response.data.non_field_errors[0],
                    variant: 'error'
                }));
            } catch (e) {
                dispatch(logout());
                dispatch(showMessage({ open: true, message: 'Not Authorized. ', variant: 'error' }));
            };
        });
};

export const logout = () => dispatch => {
    dispatch({ type: Types.LOGOUT, payload: false });
    localStorage.clear();
    window.location.href = '/signin';
};

export const initialState = {
    user: {
        role: null,
        isAuthenticated: false,
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.USER:
            return { ...state, user: action.payload };

        default:
            return state;
    };
};
