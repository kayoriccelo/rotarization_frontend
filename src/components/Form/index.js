import React, { useEffect } from 'react';

import { StyledCard, StyledContent, StyledActions, StyledButtonSave, StyledButtonCancel } from './styled';


export default function FormCustom(props) {
    const { object, setSubTitle } = props;

    useEffect(() => {
        !object && setSubTitle(object);
    }, [object, setSubTitle]);

    return (
        object && <StyledCard>
            <StyledContent children={props.children} />

            <StyledActions>
                <StyledButtonSave
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={props.handleSubmit}
                    children="Salvar"
                />

                <StyledButtonCancel
                    size="small"
                    variant="contained"
                    onClick={props.handleCancel}
                    children="Cancelar"
                />
            </StyledActions>
        </StyledCard>
    );
};
