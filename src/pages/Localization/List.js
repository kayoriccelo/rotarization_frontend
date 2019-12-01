import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

import { SearchCustom, TableCustom, Title } from '../../components';
import { getList, remove, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, remove, setTitle, history }) => {
    let timer = null;
    let search = '';
    
    const columns = [
        { field: 'code', label: 'Código', is_edit: true },
        { field: 'description', label: 'Descrição' },
        { field: 'actions', label: 'Ações' }
    ];

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle({
            title: <Title iconTitle={EditLocationIcon} title="Listagem de Localizações" />
        });

        return () => {
            setTitle({ title: '', subTitle: '' });
            clearTimeout(timer);
        };
    }, [timer, setTitle]);

    const onSearch = event => {
        clearTimeout(timer);

        search = event.target.value;
        timer = setTimeout(() => getList(page, pageSize, search), 1500);
    };

    const clickAdd = () => history.push('/registration/localization/new');

    const clickDelete = id => {
        return (
            <IconButton size="small" onClick={() => remove(id, 0, pageSize)}>
                <DeleteIcon fontSize="small" color="secondary" />
            </IconButton>
        )
    };

    return (
        <>
            <SearchCustom
                onSearch={onSearch}
                clickAdd={clickAdd}
            />
            <TableCustom
                columns={columns}
                data={data}
                actions={[{ action: clickDelete, method: 'delete' }]}
                path='/registration/localization'
            />
        </>
    )
};


const mapStateToProps = ({ localization, pagination }) => ({
    data: localization.data, 
    page: pagination.page, 
    pageSize: pagination.pageSize
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, remove, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
