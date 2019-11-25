import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SupervisorAccount } from "@material-ui/icons";

import { FormCustom } from '../../components';
import Data from './Data';
import { createInstance, save, setTitle } from './store/ducks';


const AddEmployee = ({ save, setTitle, history }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        setTitle({
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SupervisorAccount style={{ padding: '0px 8px 4px 0px' }} /> Funcionário
                </div>
            )
        });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        setEmployee(createInstance());
    }, []);

    const handleSubmit = () => save(employee, history);

    const handleCancel = () => history.push('/registration/employee');

    const handleChange = (name) => event => {
        name === 'name' && setTitle({
            subTitle: `${employee.cpf} - ${event.target.value}`
        });

        setEmployee({ ...employee, [name]: event.target.value });
    };

    return (
        employee && <FormCustom
            object={employee}
            setObject={setEmployee}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={employee => employee && setTitle({
                subTitle: `${employee.cpf} - ${employee.name}`
            })}
        >
            <Data
                employee={employee}
                handleChange={handleChange}
            />
        </FormCustom>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, setTitle }, dispatch);
export default connect(null, mapDispatchToProps)(AddEmployee);
