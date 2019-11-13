import api from '../../../../services/api';
import { setTitle } from '../../../../components/Route/store/ducks';
import { saveDefault } from '../../../../commons/store/ducks/actions';
import { showMessage } from '../../../../components/Message/store/ducks';


const Types = {
    LOAD: 'company/LOAD',
    UPDATE: 'company/UPDATE'
};

export { setTitle };

export const load = () => dispatch => {
    return api.get('v1/company')
        .then(res => {
            const payload = res.data.results[0];

            dispatch({ type: Types.LOAD, payload });

            return payload; 
        }, err => {
            dispatch(showMessage({
                open: true,
                message: 'Não foi possível carregar os dados.',
                variant: 'error'
            }));
        })
}

export const save = (company, history) =>
    saveDefault(company, 'company', Types.UPDATE, history, '/dashboard');

const initialState = {
    instance: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, instance: action.payload };

        case Types.UPDATE:
            return { ...state, instance: action.payload };

        default:
            return state;
    };
};
