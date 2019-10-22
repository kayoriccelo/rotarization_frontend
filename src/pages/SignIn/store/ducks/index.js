import { apiNotToken } from '../../../../services/api';
import { loadUser } from '../../../../auth/store/ducks';


const Types = {
    LOGIN: 'signin/LOGIN',
};

export const login = (values, history) => dispatch => {
    return apiNotToken.post('token/', values)
        .then(res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            dispatch(loadUser(history));
            console.log('Login success;');
        }, err => {
            // TODO: Kayo Riccelo - Tratar erros;
            console.log('Login error;');
        });
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
