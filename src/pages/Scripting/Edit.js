import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const Edit = ({ instance, load, save, setTitle, id, history }) => {
    const [scripting, setScripting] = useState(null);

    useEffect(() => {
        setTitle({ title: 'Roteirização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !scripting && load(id);

        // scripting && setTitle({ subTitle: `${scripting.code} - ${scripting.description}` });
    }, [scripting, id, load, setTitle]);

    const handleSubmit = () => save(scripting, history);

    const handleCancel = () => history.push('/scripting');

    const handleChange = name => event => {
        // name === 'description' && setTitle({
        //     subTitle: `${scripting.code} - ${event.target.value}`
        // });

        setScripting({ ...scripting, [name]: event.target.value });
    };

    const handleLocalizationChange = value => {
        setScripting({ ...scripting, localizations: value });
    };

    return (
        <FormCustom
            object={scripting}
            setObject={setScripting}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            instance={instance}
            setSubTitle={scripting => setTitle({
                // subTitle: `${scripting.code} - ${scripting.description}`
            })}
        >
            {scripting && (
                <Data
                    scripting={scripting}
                    handleChange={handleChange}
                    handleLocalizationChange={handleLocalizationChange}
                />
            )}
        </FormCustom>
    );
};


const mapStateToProps = ({ scripting }) => ({ instance: scripting.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
