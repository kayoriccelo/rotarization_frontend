import React, { useEffect } from 'react';

import SearchList from './Search';
import TableList from './Table';


export default function ListCustom({ columns, data, page, pageSize, url, history, getList, deleteItem }) {
    let timer = null;
    let search = '';

    useEffect(() => {
        getList(page, pageSize);
    }, [page, pageSize, getList]);

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer]);

    const onSearch = event => {
        clearTimeout(timer);

        search = event.target.value;
        timer = setTimeout(() => getList(page, pageSize, search), 1500);
    };

    const clickAdd = () => history.push(url);

    const clickDelete = id => deleteItem(id, 0, pageSize);

    return (
        <>
            <SearchList
                onSearch={onSearch}
                clickAdd={clickAdd}
            />
            <TableList
                columns={columns}
                data={data}
                actions={[clickDelete]}
                path={url}
            />
        </>
    );
};
