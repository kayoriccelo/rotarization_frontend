import { setTitle } from '../../../../components/Route/store/ducks';
import { getListDefault, loadDefault, saveDefault, removeDefault } from '../../../../commons/store/ducks/actions';
import { setPages } from '../../../../components/List/Pagination/store/ducks';


export { setTitle };

export const Types = {
    LIST: 'localization/LIST',
    GET: 'localization/GET',
    PUT: 'localization/PUT',
    POST: 'localization/POST',
    DELETE: 'localization/DELETE'
};

export function createInstance() {
    return {
        code: '',
        description: '',
        longitude: 1,
        latitude: 1,
        client: null
    };
};

export const getList = (page, pageSize, search = '') =>
    getListDefault(search, page, pageSize, 'localization', Types.LIST);

export const load = (id) => loadDefault(id, 'localization', Types.GET)

export const save = (localization, history) =>
    saveDefault(localization, 'localization', Types.POST, history, '/registration/localization');

export const remove = (id, page, pageSize) =>
    removeDefault(id, 'localization', [getList(page, pageSize), setPages(page, pageSize)])

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
