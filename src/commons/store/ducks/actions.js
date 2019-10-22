import api from '../../../services/api';
import { showMessage } from '../../../components/Message/store/ducks';


export const getListDefault = (search, page, pageSize, model, type) => dispatch => {
    search = search !== '' ? `?search=${search}&` : `?`;
    search += `page=${page + 1}&page_size=${pageSize}`

    return api.get(`api/${model}${search}`)
        .then(res => {
            dispatch({
                type,
                payload: res.data
            });

            return res.data;
        });
};

export const loadDefault = (id, model, type) => dispatch => {
    return api.get(`api/${model}?id=${id}`)
        .then(res => {
            dispatch({
                type,
                payload: res.data.results ? res.data.results[0] : res.data
            });
        }, err => {
            dispatch(showMessage({
                open: true,
                message: 'Não foi possível carregar os dados.',
                variant: 'error'
            }));
        });
};

export const saveDefault = (instance, model, type, history, path) => dispatch => {
    const crud = instance['id'] ? { method: api.put, url: `${instance.id}/` } : { method: api.post, url: '' };

    return crud.method(`api/${model}/${crud['url']}`, instance)
        .then(res => {
            dispatch({
                type,
                payload: res.data
            });

            dispatch(showMessage({
                open: true,
                message: 'Registro salvo com sucesso..',
                variant: 'success'
            }));

            history.push(path);
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
                    message: 'Não foi possível salvar o registro.',
                    variant: 'error'
                }));
            };
        });
};

export const deleteDefault = (id, model) => api.delete(`api/${model}/${id}`);
