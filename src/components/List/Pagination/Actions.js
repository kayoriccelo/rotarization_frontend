import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

import {
    StyledRoot, StyledIconButton, StyledFirstPageIcon, StyledKeyboardArrowLeft, StyledKeyboardArrowRight, StyledLastPageIcon
} from './styled';


export const TablePaginationActions = props => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = event =>onChangePage(event, 0);

    const handleBackButtonClick = event => onChangePage(event, page - 1);

    const handleNextButtonClick = event => onChangePage(event, page + 1);

    const handleLastPageButtonClick = event => onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

    return (
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
            
            <StyledIconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <StyledKeyboardArrowLeft /> : <StyledKeyboardArrowRight />}
            </StyledIconButton>
            
            <StyledIconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <StyledFirstPageIcon /> : <StyledLastPageIcon />}
            </StyledIconButton>
        </StyledRoot>
    );
};


TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default TablePaginationActions;
