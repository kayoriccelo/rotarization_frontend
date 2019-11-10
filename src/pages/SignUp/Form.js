import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { InputText, InputPassword, Submit, ButtonLink } from '../../components';
import useStyles from './styles';
import { register } from './store/ducks';


const Form = ({ history, register }) => {
    const { form, formContent } = useStyles();
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
        <div className={form}>
            <img
                width="60px"
                src={require('../../assets/images/logo.png')}
                alt="logo"
                style={{ paddingBottom: 10 }}
            />

            <div style={{
                display: 'block',
                fontSize: '100%',
                fontWeight: 'bold',
                paddingBottom: 20
            }}>
                Inscreva-se no Controle de Rotas
            </div>

            <div className={formContent}>
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
                        columns={{ xs: 12 }}
                        password={values['password']}
                        handleChange={handleChange('password')}
                    />

                    <InputPassword
                        label="Confirmar Senha"
                        columns={{ xs: 12 }}
                        password={values['confirm_password']}
                        handleChange={handleChange('confirm_password')}
                    />
                </Grid>
            </div>

            <Submit
                label="Cadastrar"
                onSubmit={submit}
            />

            <ButtonLink
                labelPrimary="Entrar!"
                labelSecundary="Já tem uma conta?"
                toLink="/signin"
            />
        </div>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ register }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
