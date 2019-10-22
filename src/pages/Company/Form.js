import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';


const FormCompany = ({ instance, load, update, history }) => {
    const [company, setCompany] = useState(null);

    const handleSubmit = () => update(company, history);

    const handleCancel = () => history.push('dashboard');

    return (
        <FormCustom
            object={company}
            setObject={setCompany}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            instance={instance}
            load={load}
        />
    );
};

const mapStateToProps = ({ company }) => ({ instance: company.instance })
const mapDispatchToProps = dispatch => bindActionCreators({ load, update }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FormCompany);
