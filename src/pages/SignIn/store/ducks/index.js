import { apiNotToken } from '../../../../services/api';
import { loadUser } from '../../../../auth/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


const Types = {
    LOGIN: 'signin/LOGIN',
};

export const login = (values, history) => dispatch => {
    return apiNotToken.post('token/', values)
        .then(res => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

            dispatch(loadUser(history));
            dispatch(showMessage({
                open: true,
                message: 'Login realizado com sucesso..',
                variant: 'success'
            }));
        }, err => {
            // TODO: Kayo Riccelo - Tratar erros;
            dispatch(showMessage({
                open: true,
                message: 'Não foi possível realizar o login.',
                variant: 'error'
            }));
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
