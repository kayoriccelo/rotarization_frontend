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

export const load = (id) => loadDefault(id, 'scripting', Types.GET)

export const save = (scripting, history) => {
    if (Object.keys(scripting).indexOf('localizations') > -1)
        if (scripting.localizations.length === 0) {
            delete scripting.localizations;
        } else {
            scripting.localizations = scripting.localizations.map(item => item.id);
        };            

    return saveDefault(scripting, 'scripting', Types.POST, history, '/scripting');
};

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
