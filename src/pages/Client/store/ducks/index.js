import { setTitle } from '../../../../components/Route/store/ducks';
import { getListDefault, loadDefault, saveDefault, removeDefault } from '../../../../commons/store/ducks/actions';
import { setPages } from '../../../../components/List/Pagination/store/ducks';


export { setTitle };

export const Types = {
    LIST: 'client/LIST',
    GET: 'client/GET',
    PUT: 'client/PUT',
    POST: 'client/POST',
    DELETE: 'client/DELETE'
};

export function createInstance() {
    return {
        cnpj: '',
        business_name: '',
        email: '',
        phone: ''
    };
};

export const getList = (page, pageSize, search = '') =>
    getListDefault(search, page, pageSize, 'client', Types.LIST);

export const load = (id) => loadDefault(id, 'client', Types.GET)

export const save = (client, history) =>
    saveDefault(client, 'client', Types.POST, history, '/registration/client');

export const remove = (id, page, pageSize) =>
    removeDefault(id, 'client', [getList(page, pageSize), setPages(page, pageSize)])

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
