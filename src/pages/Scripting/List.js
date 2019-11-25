import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapIcon from '@material-ui/icons/Map';

import { SearchCustom, TableCustom, Title } from '../../components';
import { getList, remove, setTitle } from './store/ducks';


export const List = ({ data, page, pageSize, getList, remove, setTitle, history }) => {
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
    }, [page, pageSize, getList])

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

    const clickAdd = () => history.push('/scripting/new');

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
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList, remove, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
