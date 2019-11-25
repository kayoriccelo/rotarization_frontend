import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { InputText, InputPassword, Submit, ButtonLink } from '../../components';
import { StyledForm, StyledContent, StyledImage, StyledTitle } from './styled';
import { register } from './store/ducks';


const Form = ({ screen, history, register }) => {
    const [values, setValues] = useState({
        first_name: null,
        last_name: null,
        cpf: null,
        email: null,
        confirm_password: null,
        username: null,
        password: null
    });

    const handleChange = fieldName => e => setValues({ ...values, [fieldName]: e.target.value });

    const submit = () => register(values, history);

    return (
        <StyledForm  screen={screen}>
            <StyledImage
                src={require('../../assets/images/logo.png')}
                alt="logo"
            />

            <StyledTitle children="Inscreva-se no Controle de Rotas" />

            <StyledContent>
                <Grid container id="data">
                    <InputText
                        label="Primeiro Nome"
                        columns={{ xs: 6 }}
                        value={values['first_name']}
                        handleChange={handleChange('first_name')}
                    />

                    <InputText
                        label="Último Nome"
                        columns={{ xs: 6 }}
                        value={values['last_name']}
                        handleChange={handleChange('last_name')}
                    />

                    <InputText
                        label="Cpf"
                        columns={{ xs: 12 }}
                        value={values['cpf']}
                        handleChange={handleChange('cpf')}
                    />

                    <InputText
                        label="Email"
                        columns={{ xs: 12 }}
                        value={values['email']}
                        handleChange={handleChange('email')}
                    />

                    <InputText
                        label="Usuário"
                        columns={{ xs: 12 }}
                        value={values['username']}
                        handleChange={handleChange('username')}
                    />

                    <InputPassword
                        label="Senha"
                        columns={{ xs: 6 }}
                        password={values['password']}
                        handleChange={handleChange('password')}
                    />

                    <InputPassword
                        label="Confirmar Senha"
                        columns={{ xs: 6 }}
                        password={values['confirm_password']}
                        handleChange={handleChange('confirm_password')}
                    />

                    <Submit
                        label="Cadastrar"
                        onSubmit={submit}
                    />

                    <ButtonLink
                        labelPrimary="Entrar!"
                        labelSecundary="Já tem uma conta?"
                        toLink="/signin"
                    />
                </Grid>
            </StyledContent>
        </StyledForm>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ register }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
