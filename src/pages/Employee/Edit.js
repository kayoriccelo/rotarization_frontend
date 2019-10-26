import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { maskCpf } from '../../commons/useful';
import { FormCustom, InputText } from '../../components';
import { load, save, setTitle } from './store/ducks';


const EditEmployee = ({ instance, load, save, setTitle, id, history }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Funcionário' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !employee && load(id);

        employee && setTitle({ subTitle: `${employee.cpf} - ${employee.name}`});
    }, [employee, id, load, setTitle]);

    const handleSubmit = () => save(employee, history);

    const handleCancel = () => history.push('/registration/employee');

    const handleChange = name => event => {
        name === 'name' && setTitle({
            subTitle: `${employee.cpf} - ${event.target.value}`
        });

        setEmployee({ ...employee, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={employee}
            setObject={setEmployee}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            instance={instance}
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
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
