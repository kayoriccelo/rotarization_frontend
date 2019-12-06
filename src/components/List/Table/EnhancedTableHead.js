import React from 'react';
import { TableHead, TableRow, TableSortLabel } from '@material-ui/core';

import { StyledTableCell } from './styled';


export default function EnhancedTableHead({ columns, order, orderBy, onRequestSort }) {

    const createSortHandler = property => event => onRequestSort(event, property);

    return (
        <TableHead>
            <TableRow>
                {columns.map(column => (
                    column.field !== 'actions' ?
                        <StyledTableCell
                            key={column.field}
                            sortDirection={orderBy === column.field ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === column.field}
                                direction={order}
                                onClick={createSortHandler(column.field)}
                            >
                                {column.label}
                            </TableSortLabel>
                        </StyledTableCell>
                        :
                        <StyledTableCell key={column.field} >
                            {column.label}
                        </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};