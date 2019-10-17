import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { InputText, InputPassword, Submit, ButtonLink } from '../../components';
import useStyles from './styles';
import { register } from './store/ducks';


const Form = ({ history, register }) => {
    const { form } = useStyles();
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
            <InputText
                label="Primeiro Nome"
                value={values['first_name']}
                handleChange={handleChange('first_name')}
            />

            <InputText
                label="Último Nome"
                value={values['last_name']}
                handleChange={handleChange('last_name')}
            />

            <InputText
                label="Cpf"
                value={values['cpf']}
                handleChange={handleChange('cpf')}
            />

            <InputText
                label="Email"
                value={values['email']}
                handleChange={handleChange('email')}
            />

            <InputText
                label="Usuário"
                value={values['username']}
                handleChange={handleChange('username')}
            />

            <InputPassword
                label="Senha"
                password={values['password']}
                handleChange={handleChange('password')}
            />

            <InputPassword
                label="Confirmar Senha"
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
        </div>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ register }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
