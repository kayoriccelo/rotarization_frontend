import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SearchCustom, TableCustom } from '../../components';
import { maskCpf } from '../../commons/useful';
import { getList, deleteItem, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, deleteItem, setTitle, history }) => {
    const columns = [
        { field: 'cpf', label: 'Cpf', is_edit: true, mask: maskCpf },
        { field: 'name', label: 'Name' },
        { field: 'actions', label: 'Actions' }
    ];

    let timer = null;
    let search = '';

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList])

    useEffect(() => {
        setTitle({ title: 'Listagem de funcionários' });

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

    const clickAdd = () => history.push('/registration/employee/new');

    const clickDelete = id => deleteItem(id, 0, pageSize);

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
                path='/registration/employee'
            />
        </>
    )
};


const mapStateToProps = ({ employee, pagination }) => ({
    data: employee.data, 
    page: pagination.page, 
    pageSize: pagination.pageSize
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, deleteItem, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
