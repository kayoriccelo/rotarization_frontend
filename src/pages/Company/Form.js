import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { maskCnpj, maskPhone } from '../../commons/useful';
import { FormCustom, InputText } from '../../components';
import { load, update, setTitle } from './store/ducks';


const FormCompany = ({ instance, load, update, setTitle, history }) => {
    const [company, setCompany] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Empresa' });

        return () => setTitle({ title: '', subTitle: ''});
    }, [setTitle]);

    const handleSubmit = () => update(company, history);

    const handleCancel = () => history.push('dashboard');

    const handleChange = (name) => event => {
        if (name === 'business_name') {
            setTitle({ subTitle: `${company.cnpj} - ${event.target.value}` });
        };

        setCompany({ ...company, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={company}
            setObject={setCompany}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            instance={instance}
            load={load}
            setSubTitle={company => setTitle({ subTitle: `${company.cnpj} - ${company.business_name}` })}
        >
            {company && (
                <div>
                    <InputText
                        label="Cnpj"
                        maxLength="18"
                        value={maskCnpj(company.cnpj)}
                        handleChange={handleChange('cnpj')}
                    />

                    <InputText
                        label="Razão social"
                        maxLength="140"
                        value={company.business_name}
                        handleChange={handleChange('business_name')}
                    />

                    <InputText
                        label="Email"
                        maxLength="100"
                        value={company.email}
                        handleChange={handleChange('email')}
                    />

                    <InputText
                        label="Telefone"
                        maxLength="15"
                        value={maskPhone(company.phone)}
                        handleChange={handleChange('phone')}
                    />
                </div>
            )}
        </FormCustom>
    );
};

const mapStateToProps = ({ company }) => ({ instance: company.instance })
const mapDispatchToProps = dispatch => bindActionCreators({ load, update, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormCompany);
