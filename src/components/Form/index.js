import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button} from '@material-ui/core';

import useStyles from './styles';


export default function FormCustom({ instance, load, children, handlerSubmit, handlerCancel }) {
    const { card, cardContent, actions, button } = useStyles();
    const [object, setObject] = useState(null);

    useEffect(() => {
        object === null && load()
            .then(res => object !== instance && setObject(instance));

    }, [object, instance, load]);

    return (
        object &&
        <Card className={card}>
            <CardContent className={cardContent}>

                {children}

                <div className={actions}>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={button}
                        onClick={handlerCancel}
                    >
                        Cancelar
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={button}
                        onClick={handlerSubmit}
                    >
                        Salvar
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
};
