import api from '../../../../services/api';


const Types = {
    LOAD: 'company/LOAD',
    UPDATE: 'company/UPDATE'
};

export const load = () => dispatch => {
    return api.get('api/v1/company')
        .then(res => {
            dispatch({
                type: Types.LOAD,
                payload: res.data.results[0]
            })
            console.log('Load company success;');
        }, err => {
            console.log('Load company error;');
        })
}

export const update = (values, history) => dispatch => {
    return api.put('token/', values)
        .then(res => {
            // TODO: Kayo Riccelo - Mostrar mensagem de sucesso.;
            console.log('Update company success;');

            history.push('/dashboard')
        }, err => {
            // TODO: Kayo Riccelo - Tratar erros;
            console.log('Update company error;');
        });
};

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
