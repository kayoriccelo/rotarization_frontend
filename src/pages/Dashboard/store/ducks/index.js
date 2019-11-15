import api from '../../../../services/api';
import { setTitle } from '../../../../components/Route/store/ducks';
import { showMessage } from '../../../../components/Message/store/ducks';


export { showMessage, setTitle };

export const Types = {
    LOAD: 'dashboad/LOAD',
};

export function load() {
    return dispatch => {
        return api.get('v1/dashboard/').then(res => {
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
    data: {
        quantidades:
            [
                ["Element", "Quantidade", { "role": "style" }, { "role": "style" }],
                ["TESTE 01", 100, "fill-color: rgb(124, 181, 236); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 02", 90, "fill-color: rgb(0, 134, 64); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 03", 80, "fill-color: rgb(247, 163, 92); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 04", 60, "fill-color: rgb(144, 237, 125); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 05", 50, "fill-color: rgb(128, 133, 233); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 06", 40, "fill-color: rgb(241, 92, 128); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 07", 60, "fill-color: rgb(228, 211, 84); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 08", 80, "fill-color: rgb(247, 163, 92); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 09", 100, "fill-color: rgb(0, 134, 64); fill-opacity: 0.6;", "opacity: 0.2"],
                ["TESTE 10", 120, "fill-color: rgb(124, 181, 236); fill-opacity: 0.6;", "opacity: 0.2"],
            ]
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, data: action.payload };

        default:
            return state;
    };
};