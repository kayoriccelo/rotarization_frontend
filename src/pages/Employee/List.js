import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from "react-router-dom";
import { SupervisorAccount } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

import { SearchCustom, TableCustom, Title } from '../../components';
import { maskCpf } from '../../commons/useful';
import { getList, remove, setTitle } from './store/ducks';


export const List = props => {
    const history = useHistory();
    const { data, page, pageSize } = props;
    const { getList, remove, setTitle } = props;
    const columns = [
        { field: 'cpf', label: 'CPF', is_edit: true, mask: maskCpf },
        { field: 'name', label: 'Nome' },
        { field: 'actions', label: 'Ações' }
    ];
    let timer = null;
    let search = '';

    useEffect(() => {
        getList(page, pageSize)
    }, [page, pageSize, getList]);

    useEffect(() => {
        setTitle({
            title: <Title iconTitle={SupervisorAccount} title="Listagem de Funcionários" />
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

    const clickAdd = () => history.push('/registration/employee/new');

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
                actions={[
                    { action: clickDelete, method: 'delete' }
                ]}
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, remove, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
