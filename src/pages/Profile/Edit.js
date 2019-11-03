import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormCustom, InputText, InputPassword } from '../../components';
import { load, update, setTitle, showMessage } from './store/ducks';


export const Form = ({ instance, load, update, setTitle, showMessage, history }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        profile && setTitle(`${profile.first_name} ${profile.last_name}`);

        return () => setTitle('');
    }, [profile, setTitle]);

    useEffect(() => {
        profile === null && load().then(res => {
            profile !== instance && setProfile(instance);
        });
    }, [profile, instance, load]);

    const handleChange = name => event => {
        setProfile({ ...profile, [name]: event.target.value });
        setTitle(`${profile.first_name} ${profile.last_name}`);
    };

    const handleSubmit = () => {
        if (profile.new_password && profile.new_password === profile.confirm_password) {
            update(profile, history);
        } else {
            showMessage({ open: true, message: 'Senhas não informadas ou inválidas.', variant: 'error' });
        };
    };

    const handleCancel = () => history.push('dashboard');

    return (
        profile &&
        <FormCustom
            object={profile}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={profile => setTitle({
                subTitle: `${profile.first_name} - ${profile.last_name}`
            })}
        >
            <InputText
                label="Primeiro Nome"
                maxLength="140"
                value={profile.first_name}
                handleChange={handleChange('first_name')}
            />

            <InputText
                label="Ultimo Nome"
                maxLength="140"
                value={profile.last_name}
                handleChange={handleChange('last_name')}
            />

            <InputPassword
                label="Nova Senha"
                password={profile.new_password}
                handleChange={handleChange('new_password')}
            />

            <InputPassword
                label="Confirmar Senha"
                password={profile.confirm_password}
                handleChange={handleChange('confirm_password')}
            />
        </FormCustom>
    );
};

const mapStateToProps = ({ profile }) => ({ instance: profile.instance });
const mapDispatchToProps = (dispatch) => bindActionCreators({ load, update, setTitle, showMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Form);
