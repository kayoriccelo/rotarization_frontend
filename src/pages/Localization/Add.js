import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';
import Data from './Data';
import { createInstance, save, setTitle } from './store/ducks';


const Add = ({ save, setTitle, history }) => {
    const [localization, setLocalization] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Localização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        setLocalization(createInstance());
    }, []);

    const handleSubmit = () => save(localization, history);

    const handleCancel = () => history.push('/registration/localization');

    const handleChange = (name) => event => {
        name === 'description' && setTitle({
            subTitle: `${localization.code} - ${event.target.value}`
        });

        setLocalization({ ...localization, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={localization}
            setObject={setLocalization}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={localization => localization && setTitle({
                subTitle: `${localization.code} - ${localization.description}`
            })}
        >
            {localization && (
                <Data
                    localization={localization}
                    handleChange={handleChange}
                />
            )}
        </FormCustom>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, setTitle }, dispatch);
export default connect(null, mapDispatchToProps)(Add);
