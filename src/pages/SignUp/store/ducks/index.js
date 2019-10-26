import { apiNotToken } from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';


const Types = {
    REGISTER: 'signup/Register'
};

export const register = (values, history) => dispatch => {
    return apiNotToken.post('api/v1/usercreate/', values)
        .then(res => {
            history.push('/signin');
            dispatch(showMessage({
                open: true,
                message: 'Usuário cadastrado com sucesso..',
                variant: 'success'
            }));
        }, err => {
            // TODO: Kayo Riccelo - Tratar erros;
            dispatch(showMessage({
                open: true,
                message: 'Não foi possível cadastrar usuário.',
                variant: 'error'
            }));
        });
};

export const logout = () => dispatch => {
    dispatch({ type: Types.LOGOUT, payload: false });
    localStorage.clear();
    window.location.href = '/signin';
};

const initialState = {
    isRegistered: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.REGISTER:
            return { ...state, isRegistered: action.payload };

        default:
            return state;
    };
};
