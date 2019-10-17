import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './styles';


export default function Submit({ label, onSubmit }) {
    const { button } = useStyles();

    return (
        <Button
            variant="contained"
            className={button}
            onClick={() => onSubmit()}
        >
            {label}
        </Button>
    );
};
