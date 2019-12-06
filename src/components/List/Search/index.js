import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import { StyledRoot, StyledPaper, StyledSearchIcon, StyledInputBase, StyledButtonAdd } from './styled';


export default function SearchList({ onSearch, clickAdd, children }) {

    return (
        <StyledRoot>
            <StyledPaper>
                <StyledSearchIcon />
                
                <StyledInputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Journey' }}
                    onChange={onSearch}
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
            </StyledPaper>
        </StyledRoot>
    );
};