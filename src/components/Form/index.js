import React, { useEffect } from 'react';

import { StyledCard, StyledContent, StyledActions, StyledButton } from './styled';


export default function FormCustom(props) {
    const { object, setSubTitle } = props;

    useEffect(() => {
        !object && setSubTitle(object);
    }, [object, setSubTitle]);

    return (
        object && <StyledCard>
            <StyledContent children={props.children} />

            <StyledActions>
                <StyledButton
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={props.handleSubmit}
                    children="Salvar"
                />

                <StyledButton
                    size="small"
                    variant="contained"
                    onClick={props.handleCancel}
                    children="Cancelar"
                />
            </StyledActions>
        </StyledCard>
    );
};
