import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IconButton } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import DeleteIcon from '@material-ui/icons/Delete';
import NearMeIcon from '@material-ui/icons/NearMe';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { SearchCustom, TableCustom, Title } from '../../components';
import { getList, remove, setTitle, save } from './store/ducks';


export const List = ({ data, page, pageSize, getList, save, remove, setTitle, history }) => {
    let timer = null;
    let search = '';

    const columns = [
        { field: 'description', label: 'Descrição', is_edit: true },
        { field: 'date_initial', label: 'Início' },
        { field: 'date_final', label: 'Concluído' },
        { field: 'localizations_count', label: 'Localizações' },
        { field: 'employees_count', label: 'Funcionários' },
        { field: 'status', label: 'Situação', is_status: true },
        { field: 'actions', label: 'Ações' }
    ];

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList]);

    useEffect(() => {
        setTitle({
            title: <Title iconTitle={MapIcon} title="Listagem de Roteirizações" />
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

    const starting = item => {
        let scripting = item;
        scripting['date_initial'] = new Date().toLocaleDateString();
        scripting['hour_initial'] = new Date().toLocaleTimeString(
            'pt-BR', { hour: "2-digit", minute: "2-digit" }
        );
        scripting['status'] = 'I';
        save(scripting, history);
    };

    const cancel = item => {
        let scripting = item;
        scripting['status'] = 'D';
        save(scripting, history);
    };

    const completed = item => {
        let scripting = item;
        scripting['date_final'] = new Date().toLocaleDateString();
        scripting['hour_final'] = new Date().toLocaleTimeString(
            'pt-BR', { hour: "2-digit", minute: "2-digit" }
        );
        scripting['status'] = 'C';
        save(scripting, history);
    };

    const clickAdd = () => history.push('/scripting/new');

    const clickDelete = id => {
        return (
            <IconButton size="small" onClick={() => remove(id, 0, pageSize)}>
                <DeleteIcon fontSize="small" color="error" titleAccess="Excluir" />
            </IconButton>
        );
    };

    const clickStarting = item => {
        return (
            <IconButton size="small" onClick={() => starting(item)}>
                <NearMeIcon fontSize="small" color="primary" titleAccess="Iniciar" />
            </IconButton>
        );
    };

    const clickCancel = item => {
        return (
            <IconButton size="small" onClick={() => cancel(item)}>
                <CancelIcon fontSize="small" color="secondary" titleAccess="Cancelar" />
            </IconButton>
        );
    };

    const clickCompleted = item => {
        return (
            <IconButton size="small" onClick={() => completed(item)}>
                <CheckCircleIcon fontSize="small" style={{ color: "rgb(76, 175, 80)" }} titleAccess="Concluir" />
            </IconButton>
        );
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
                    { action: clickStarting, method: 'starting' },
                    { action: clickCompleted, method: 'completed' },
                    { action: clickCancel, method: 'cancel' },
                    { action: clickDelete, method: 'delete' },
                ]}
                path='/scripting'
            />
        </>
    )
};


const mapStateToProps = ({ scripting, pagination }) => ({
    data: scripting.data,
    page: pagination.page,
    pageSize: pagination.pageSize
});
const mapDispatchToProps = dispatch => bindActionCreators({ getList, save, remove, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
