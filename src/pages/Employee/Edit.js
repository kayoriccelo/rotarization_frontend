import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { maskCpf } from '../../commons/useful';
import { FormCustom, InputText } from '../../components';
import { load, update, setTitle } from './store/ducks';


const EditEmployee = ({ instance, load, update, setTitle, history }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Funcionário' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        employee && load();
    }, [employee, load]);

    const handleSubmit = () => update(employee, history);

    const handleCancel = () => history.push('/employees');

    const handleChange = (name) => event => {
        name === 'description' && setTitle({
            subTitle: `${employee.cpf} - ${event.target.value}`
        });

        setCompany({ ...employee, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={employee}
            setObject={setEmployee}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            instance={instance}
            load={load}
            setSubTitle={employee => setTitle({
                subTitle: `${employee.cnpj} - ${employee.business_name}`
            })}
        >
            {employee && (
                <div>
                    <InputText
                        label="Cpf"
                        maxLength="14"
                        value={maskCpf(employee.cpf)}
                        handleChange={handleChange('cpf')}
                    />

                    <InputText
                        label="Nome"
                        maxLength="140"
                        value={employee.name}
                        handleChange={handleChange('name')}
                    />
                </div>
            )}
        </FormCustom>
    );
};


const mapStateToProps = ({ employee }) => ({ instance: employee.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, update, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
