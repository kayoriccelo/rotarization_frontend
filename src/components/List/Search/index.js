import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from '@material-ui/core/InputAdornment';

import { StyledRoot, StyledSearchIcon, StyledInput, StyledButtonAdd } from './styled';


export default function SearchList({ onSearch, clickAdd, children }) {

    return (
        <StyledRoot>
            <StyledInput
                id="search-size-small"
                variant="outlined"
                size="small"
                placeholder="Pesquisar por..."
                onChange={onSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <StyledSearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            {children}

            {clickAdd &&
                <StyledButtonAdd
                    variant="contained"
                    onClick={clickAdd}
                >
                    <AddIcon />
                </StyledButtonAdd>
            }
        </StyledRoot>
    );
};