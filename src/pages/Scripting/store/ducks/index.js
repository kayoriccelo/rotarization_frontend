import api from '../../../../services/api';
import { showMessage } from '../../../../components/Message/store/ducks';
import { setTitle } from '../../../../components/Route/store/ducks';
import { getListDefault, loadDefault, saveDefault, removeDefault } from '../../../../commons/store/ducks/actions';
import { setPages } from '../../../../components/List/Pagination/store/ducks';


export { setTitle };

export const Types = {
    LIST: 'scripting/LIST',
    GET: 'scripting/GET',
    PUT: 'scripting/PUT',
    POST: 'scripting/POST',
    DELETE: 'scripting/DELETE'
};

export function createInstance() {
    return {
        description: '',
        origin_longitude: null,
        origin_latitude: null,
        origin_address: null,
        destiny_longitude: null,
        destiny_latitude: null,
        destiny_address: null
    };
};

export const getList = (page, pageSize, search = '') =>
    getListDefault(search, page, pageSize, 'scripting', Types.LIST);

export const load = id => loadDefault(id, 'scripting', Types.GET);

export const save = (scripting, history) => {
    if (Object.keys(scripting).indexOf('localizations') > -1)
        if (scripting.localizations.length !== 0) {
            scripting.localizations = scripting.localizations.map(item => item.id ? item.id : item);
        };

    if (Object.keys(scripting).indexOf('employees') > -1)
        if (scripting.employees.length !== 0) {
            scripting.employees = scripting.employees.map(item => item.id ? item.id : item);
        };

    return saveDefault(scripting, 'scripting', Types.POST, history, '/scripting');
};

export const saveInList = (scripting, page, pageSize) => dispatch => {
    return api.put(`v1/scripting/${scripting['id']}/`, scripting)
        .then(res => {
            dispatch(showMessage({
                open: true,
                message: 'Registro atualizado com sucesso..',
                variant: 'success'
            }));

            dispatch(getList(page, pageSize));
            dispatch(setPages(page, pageSize));
        }, err => {
            try {
                dispatch(showMessage({
                    open: true,
                    message: err.response.data.non_field_errors[0],
                    variant: 'error'
                }));
            } catch (e) {
                dispatch(showMessage({
                    open: true,
                    message: 'Não foi possível atualizar o registro.',
                    variant: 'error'
                }));
            };
        });
}

export const remove = (id, page, pageSize) =>
    removeDefault(id, 'scripting', [getList(page, pageSize), setPages(page, pageSize)])

export const initialState = {
    data: { itens: [], count: 0 },
    instance: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.LIST:
            return {
                ...state, data: {
                    itens: action.payload.results,
                    count: action.payload.count
                }
            };

        case Types.GET:
            return { ...state, instance: action.payload };

        case Types.POST:
            return { ...state, instance: action.payload };

        case Types.PUT:
            return { ...state, instance: action.payload };

        case Types.DELETE:
            return { ...state };

        default:
            return state;
    };
};
