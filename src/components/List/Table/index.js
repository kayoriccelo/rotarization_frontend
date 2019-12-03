import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell, Card } from '@material-ui/core';
import { HighlightOff, RadioButtonUnchecked, Adjust, CheckCircleOutline } from '@material-ui/icons';


import useStyles from './styles';
import TablePagination from '../Pagination';
import EnhancedTableHead from './EnhancedTableHead';


export default function TableList({ columns, data, actions, path, is_pagination = true, params = ['id'], paramsValue = [] }) {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState();

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    function desc(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) return -1;

        if (b[orderBy] > a[orderBy]) return 1;

        return 0;
    };

    function stableSort(array, cmp) {
        const stabilizedThis = array.map((el, index) => [el, index]);

        stabilizedThis.sort((a, b) => {
            const order = cmp(a[0], b[0]);

            if (order !== 0) return order;

            return a[1] - b[1];
        });

        return stabilizedThis.map(el => el[0]);
    };

    function getSorting(order, orderBy) {
        return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
    };

    let paramValue = '';
    paramsValue.map(param => paramValue = paramValue + '/' + param);

    return (
        <div className={classes.rootTable}>
            <Card className={is_pagination ? classes.card : classes.cardNotPagination}>
                <Table size="small">
                    <EnhancedTableHead
                        classes={classes}
                        columns={columns}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {
                            stableSort(data.itens, getSorting(order, orderBy)).map(item => {
                                let itemValue = '';
                                params.map(param => itemValue = itemValue + '/' + item[param]);

                                return (
                                    <TableRow key={item.id}>
                                        {
                                            columns.map((column, index) => {
                                                if (column.is_edit) {
                                                    return (
                                                        <TableCell key={`${item.id}-${index}`}>
                                                            <Link to={`${path}${itemValue}${paramValue}`}>
                                                                {column.mask ? column.mask(item[column.field]) : item[column.field]}
                                                            </Link>
                                                        </TableCell>
                                                    )
                                                } else if (column.field === 'actions') {
                                                    return (

                                                        <TableCell key="actionItem">
                                                            <div style={{ display: 'flex' }}>
                                                                {actions.map(itemAction => {
                                                                    if (item.status === 'P')
                                                                        return itemAction['action'](item.id)

                                                                    if (item.status === 'I' && itemAction['method'] === 'cancel')
                                                                        return itemAction['action'](item.id)

                                                                    if (itemAction['method'] === 'delete')
                                                                        return itemAction['action'](item.id)

                                                                    return <></>
                                                                })}
                                                            </div>
                                                        </TableCell>

                                                    )
                                                } else if (column.is_status) {
                                                    return (
                                                        <TableCell key="statusItem">
                                                            {item[column.field] === 'D' && <HighlightOff style={{ color: '#f50057' }} fontSize="small" />}
                                                            {item[column.field] === 'P' && <RadioButtonUnchecked style={{ color: '#ff9800' }} fontSize="small" />}
                                                            {item[column.field] === 'I' && <Adjust style={{ color: '#3f51b5' }} fontSize="small" />}
                                                            {item[column.field] === 'C' && <CheckCircleOutline style={{ color: '#4caf50' }} fontSize="small" />}
                                                        </TableCell>
                                                    )
                                                } else {
                                                    return <TableCell key={`${item.id}-${index}`}>{column.mask ? column.mask(item[column.field]) : item[column.field]}</TableCell>
                                                };
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    {is_pagination && <TablePagination count={data.count} />}
                </Table>
            </Card>
        </div>
    );
};
