import { apiNotToken } from '../../../../services/api';

const Types = {
    LOGIN: 'signin/LOGIN',
    LOGOUT: 'signin/LOGOUT'
};

export const login = (values, history) => dispatch => {
    return apiNotToken.post('token/', values)
        .then(res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            // dispatch(loadUser(history));
            console.log('Login success;');
        }, err => {
            // TODO: Kayo Riccelo - Tratar erros;
            console.log('Login error;');
        });
};

export const logout = () => dispatch => {
    dispatch({ type: Types.LOGOUT, payload: false });
    localStorage.clear();
    window.location.href = '/signin';
};

const initialState = {
    isLogged: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return { ...state, isLogged: action.payload };

        case Types.LOGOUT:
            return { ...state, isLogged: action.payload };

        default:
            return state;
    };
};
