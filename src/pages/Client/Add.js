import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import { FormCustom } from '../../components';
import Data from './Data';
import { createInstance, save, setTitle } from './store/ducks';


const AddClient = ({ save, setTitle, history }) => {
    const [client, setClient] = useState(null);

    useEffect(() => {
        setTitle({
            title: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <EmojiTransportationIcon style={{ padding: '0px 8px 4px 0px' }} /> Cliente
                </div>
            )
        });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        setClient(createInstance());
    }, []);

    const handleSubmit = () => save(client, history);

    const handleCancel = () => history.push('/registration/client');

    const handleChange = (name) => event => {
        name === 'business_name' && setTitle({
            subTitle: `${client.cnpj} - ${event.target.value}`
        });

        setClient({ ...client, [name]: event.target.value });
    };

    return (
        <FormCustom
            object={client}
            setObject={setClient}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={client => client && setTitle({
                subTitle: `${client.cnpj} - ${client.business_name}`
            })}
        >
            {client && (
                <Data
                    client={client}
                    handleChange={handleChange}
                />
            )}
        </FormCustom>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, setTitle }, dispatch);
export default connect(null, mapDispatchToProps)(AddClient);
