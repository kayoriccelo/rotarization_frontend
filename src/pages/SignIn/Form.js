import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { InputText, InputPassword, Submit, ButtonLink } from '../../components';
import useStyles from './styles';
import { login } from './store/ducks';


const Form = ({ history, login }) => {
    const { form, formContent } = useStyles();
    const [values, setValues] = useState({
        username: null,
        password: null
    });

    const handleChange = fieldName => e => setValues({ ...values, [fieldName]: e.target.value });

    const submit = () => login(values, history);

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
                Entrar no Controle de Rotas
            </div>

            <div className={formContent}>
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
            </div>

            <Submit
                label="Entrar"
                onSubmit={submit}
            />

            <ButtonLink
                labelPrimary="Crie uma!"
                labelSecundary="Não tem uma conta?"
                toLink="/signup"
            />
        </div>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
