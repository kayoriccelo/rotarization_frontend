import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';

import useStyles from './styles';


export default function FormCustom(props) {
    const { card, cardContent, actions, button } = useStyles();

    const { object, instance, load, setObject } = props;

    useEffect(() => {
        object === null && load()
            .then(res => object !== instance && setObject(instance));

    }, [object, instance, load, setObject]);

    return (
        object &&
        <div className={card}>
            <div className={cardContent}>
                {props.children}
            </div>
            <div className={actions}>
                <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={button}
                    onClick={props.handleCancel}
                >
                    Cancelar
                    </Button>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className={button}
                    onClick={props.handleSubmit}
                >
                    Salvar
                </Button>
            </div>
        </div>
    );
};
