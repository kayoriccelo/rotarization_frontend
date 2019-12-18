import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';

import { InputText, InputPassword, Submit, ButtonLink } from '../../components';
import { StyledForm, StyledContent, StyledTitle } from './styled';
import { StyledContentLogo, StyledLogo, StyledImageLogo } from '../../commons/styled';
import { login } from './store/ducks';


const Form = ({ screen, login }) => {
    const history = useHistory();
    const [values, setValues] = useState({
        username: null, 
        password: null
    });

    const handleChange = fieldName => e => setValues({ ...values, [fieldName]: e.target.value });

    const submit = () => login(values, history);

    return (
        <StyledForm screen={screen}>
            <StyledContentLogo>
                <StyledLogo>
                    <StyledImageLogo
                        src={require('../../assets/images/logo.png')}
                        alt="logo"
                    />
                </StyledLogo>
            </StyledContentLogo>

            <StyledTitle children="Entrar no Controle de Rotas" />

            <StyledContent>
                <Grid container id="data">
                    <InputText
                        label="Usuário"
                        columns={{ xs: 12 }}
                        value={values['username']}
                        handleChange={handleChange('username')}
                    />

                    <InputPassword
                        label="Senha"
                        columns={{ xs: 12 }}
                        password={values['password']}
                        handleChange={handleChange('password')}
                    />

                    <Submit
                        label="Entrar"
                        onSubmit={submit}
                    />

                    <ButtonLink
                        labelPrimary="Crie uma!"
                        labelSecundary="Não tem uma conta?"
                        toLink="/signup"
                    />
                </Grid>
            </StyledContent>
        </StyledForm>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
