import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableFooter, TableRow } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { setPages } from './store/ducks';
import {
    StyledRoot, StyledIconButton, StyledFirstPageIcon, StyledKeyboardArrowLeft, StyledKeyboardArrowRight, StyledLastPageIcon
} from './styled';


export const TablePagination = ({ count, page, pageSize, setPages }) => {
    const theme = useTheme();

    useEffect(() => {
        return () => setPages(0, 10);
    }, [setPages]);

    const handleChangePage = (event, newPage) => setPages(newPage, pageSize);

    const handleChangeRowsPerPage = event => setPages(0, parseInt(event.target.value, 10));

    const handleFirstPageButtonClick = event => handleChangePage(event, 0);

    const handleBackButtonClick = event => handleChangePage(event, page - 1);

    const handleNextButtonClick = event => handleChangePage(event, page + 1);

    const handleLastPageButtonClick = event => handleChangePage(event, Math.max(0, Math.ceil(count / pageSize) - 1));

    return (
        <TableFooter>
            <TableRow>
                <StyledRoot>
                    <StyledIconButton
                        onClick={handleFirstPageButtonClick}
                        disabled={page === 0}
                        aria-label="first page"
                    >
                        {theme.direction === 'rtl' ? <StyledLastPageIcon /> : <StyledFirstPageIcon />}
                    </StyledIconButton>

                    <StyledIconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                        {theme.direction === 'rtl' ? <StyledKeyboardArrowRight /> : <StyledKeyboardArrowLeft />}
                    </StyledIconButton>

                    {/* pagina atual */}

                    <StyledIconButton
                        onClick={handleNextButtonClick}
                        disabled={page >= Math.ceil(count / pageSize) - 1}
                        aria-label="next page"
                    >
                        {theme.direction === 'rtl' ? <StyledKeyboardArrowLeft /> : <StyledKeyboardArrowRight />}
                    </StyledIconButton>

                    <StyledIconButton
                        onClick={handleLastPageButtonClick}
                        disabled={page >= Math.ceil(count / pageSize) - 1}
                        aria-label="last page"
                    >
                        {theme.direction === 'rtl' ? <StyledFirstPageIcon /> : <StyledLastPageIcon />}
                    </StyledIconButton>

                    {/* Qt registo por pagina */}

                    {/* <TablePaginationUI
                    labelRowsPerPage="Registros por página"
                    rowsPerPageOptions={[10, 20, 50]}
                    count={count}
                    rowsPerPage={pageSize}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to === -1 ? count : to} de ${count}`}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                /> */}

                </StyledRoot>
            </TableRow>
        </TableFooter>
    );
};

const mapStateToProps = ({ pagination }) => ({ ...pagination });
const mapDispatchToProps = dispatch => bindActionCreators({ setPages }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);