import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditLocationIcon from '@material-ui/icons/EditLocation';

import { FormCustom } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const Edit = ({ load, save, setTitle, id, history }) => {
    const [localization, setLocalization] = useState(null);

    useEffect(() => {
        setTitle({
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <EditLocationIcon style={{ padding: '0px 8px 4px 0px' }} /> Localização
                </div>
            )
        });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !localization && load(id)
            .then(res => localization !== res && setLocalization(res));

        localization && setTitle({ subTitle: `${localization.code} - ${localization.description}` });
    }, [localization, id, load, setTitle]);

    const handleSubmit = () => save(localization, history);

    const handleCancel = () => history.push('/registration/localization');

    const handleChange = name => event => {
        name === 'description' && setTitle({
            subTitle: `${localization.code} - ${event.target.value}`
        });

        setLocalization({
            ...localization, [name]: event.target.value
        });
    };

    return (
        localization && <FormCustom
            object={localization}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={localization => setTitle({
                subTitle: `${localization.code} - ${localization.description}`
            })}
        >
            <Data
                localization={localization}
                handleChange={handleChange}
            />
        </FormCustom>
    );
};


const mapStateToProps = ({ localization }) => ({ instance: localization.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
