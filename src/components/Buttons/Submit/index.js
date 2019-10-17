import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import commonStyles from '../../../commons/styles';


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

const useStyles = makeStyles({
    button: {
        width: '80%',
        color: commonStyles.primaryColor,
        backgroundColor: commonStyles.buttonPrimary,
        '&:hover': {
            backgroundColor: commonStyles.buttonPrimaryHover,
        },
    }
});
