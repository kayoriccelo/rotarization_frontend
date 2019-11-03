import api from '../../../../services/api';
import { setTitle } from '../../../../components/Route/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage, setTitle };

export const Types = {
    LOAD: 'dashboad/LOAD',
};

export function load() {
    return dispatch => {
        return api.get('/api/v1/dashboard/').then(res => {
            dispatch({ type: Types.LOAD, payload: res.data })
        }, error => {
            try {
                dispatch(showMessage({ open: true, message: error.response.data.non_field_errors[0], variant: 'error' }));
            } catch (e) {
                dispatch(showMessage({ open: true, message: 'Não autorizado. ', variant: 'error' }));
            };
        });
    };
};

export const initialState = {
    data: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, data: action.payload };

        default:
            return state;
    };
};