import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const EditEmployee = ({ instance, load, save, setTitle, id, history }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Funcionário' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !employee && load(id)
            .then(res => employee !== res && setEmployee(res));

        employee && setTitle({ subTitle: `${employee.cpf} - ${employee.name}` });
    }, [employee, id, load, setTitle]);

    const handleSubmit = () => save(employee, history);

    const handleCancel = () => history.push('/registration/employee');

    const handleChange = name => event => {
        name === 'name' && setTitle({
            subTitle: `${employee.cpf} - ${event.target.value}`
        });

        if (['cpf', 'phone'].indexOf(name) > -1) {
            event.target.value = event.target.value.replace(/\D/g, '');
        };

        setEmployee({ ...employee, [name]: event.target.value });
    };

    return (
        employee && <FormCustom
            object={employee}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={employee => setTitle({
                subTitle: `${employee.cnpj} - ${employee.business_name}`
            })}
        >
            <Data
                employee={employee}
                handleChange={handleChange}
            />
        </FormCustom>
    );
};


const mapStateToProps = ({ employee }) => ({ instance: employee.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
