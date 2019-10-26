import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SearchCustom, TableCustom } from '../../components';
import { maskCnpj } from '../../commons/useful';
import { getList, remove, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, remove, setTitle, history }) => {
    let timer = null;
    let search = '';
    
    const columns = [
        { field: 'cnpj', label: 'CNPJ', is_edit: true, mask: maskCnpj },
        { field: 'business_name', label: 'Razão social' },
        { field: 'actions', label: 'Ações' }
    ];

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle({ title: 'Listagem de clientes' });

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

    const clickAdd = () => history.push('/registration/client/new');

    const clickDelete = id => remove(id, 0, pageSize);

    return (
        <>
            <SearchCustom
                onSearch={onSearch}
                clickAdd={clickAdd}
            />
            <TableCustom
                columns={columns}
                data={data}
                actions={[clickDelete]}
                path='/registration/client'
            />
        </>
    )
};


const mapStateToProps = ({ client, pagination }) => ({
    data: client.data, 
    page: pagination.page, 
    pageSize: pagination.pageSize
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, remove, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
