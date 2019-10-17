import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { InputText, InputPassword, Submit } from '../../components';
import { login } from './store/ducks';


const Form = ({ history, login }) => {
    const [values, setValues] = useState({ username: null, password: null });

    const handleChange = fieldName => e => setValues({ ...values, [fieldName]: e.target.value });

    const submit = () => login(values, history);

    return (
        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

            <Submit
                label="Entrar"
                onSubmit={submit}
            />
        </div>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(null, mapDispatchToProps)(Form);
