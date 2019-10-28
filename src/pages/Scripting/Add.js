import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';
import Data from './Data';
import { createInstance, save, setTitle } from './store/ducks';


const Add = ({ save, setTitle, history }) => {
    const [scripting, setScripting] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Roteirização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        setScripting(createInstance());
    }, []);

    const handleSubmit = () => save(scripting, history);

    const handleCancel = () => history.push('/scripting');

    const handleChange = (name) => event => {
        // name === 'description' && setTitle({
        //     subTitle: `${scripting.code} - ${event.target.value}`
        // });

        setScripting({ ...scripting, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={scripting}
            setObject={setScripting}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={scripting => scripting && setTitle({
                // subTitle: `${scripting.code} - ${scripting.description}`
            })}
        >
            {scripting && (
                <Data
                    scripting={scripting}
                    handleChange={handleChange}
                />
            )}
        </FormCustom>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, setTitle }, dispatch);
export default connect(null, mapDispatchToProps)(Add);
