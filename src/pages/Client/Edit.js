import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import { FormCustom, Title } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const EditClient = ({ instance, load, save, setTitle, id, history }) => {
    const [client, setClient] = useState(null);

    useEffect(() => {
        setTitle({
            title: <Title iconTitle={EmojiTransportationIcon} title="Cliente" />
        });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !client && load(id)
            .then(res => client !== res && setClient(res));

        client && setTitle({ subTitle: `${client.cnpj} - ${client.business_name}` });
    }, [client, id, load, setTitle]);

    const handleSubmit = () => save(client, history);

    const handleCancel = () => history.push('/registration/client');

    const handleChange = name => event => {
        name === 'business_name' && setTitle({
            subTitle: `${client.cnpj} - ${event.target.value}`
        });

        if (['cnpj', 'phone'].indexOf(name) > -1) {
            event.target.value = event.target.value.replace(/\D/g, '');
        };

        setClient({ 
            ...client, 
            [name]: event.target.value 
        });
    };

    return (
        client && <FormCustom
            object={client}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={client => setTitle({
                subTitle: `${client.cnpj} - ${client.business_name}`
            })}
        >
            <Data
                client={client}
                handleChange={handleChange}
            />
        </FormCustom>
    );
};


const mapStateToProps = ({ client }) => ({ instance: client.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditClient);
