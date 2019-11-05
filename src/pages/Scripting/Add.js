import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FormCustom } from '../../components';
import Data from './Data';
import { createInstance, save, setTitle } from './store/ducks';
const iconUser  = 'https://cdn0.iconfinder.com/data/icons/user-icons-4/100/user-17-512.png';


const Add = ({ save, setTitle, history }) => {
    const [scripting, setScripting] = useState(null);
    const [waypoints, setWaypoints] = useState([]);

    useEffect(() => {
        setTitle({ title: 'Roteirização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        setScripting(createInstance());
    }, []);

    const handleSubmit = () => save(scripting, history);

    const handleCancel = () => history.push('/scripting');

    const handleChange = name => event => {
        name === 'description' && setTitle({
            subTitle: `${event.target.value}`
        });

        setScripting({ ...scripting, [name]: event.target.value });
    };

    const handleLocalizationChange = value => {
        setWaypoints(
            value.map(item => ({
                position: item.address,
                icon: iconUser
            }))
        );

        setScripting({ ...scripting, localizations: value });
    };

    return (
        scripting && <FormCustom
            object={scripting}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={scripting => setTitle({
                subTitle: `${scripting.description}`
            })}
        >
            <Data
                scripting={scripting}
                waypoints={waypoints}
                handleChange={handleChange}
                handleLocalizationChange={handleLocalizationChange}
            />
        </FormCustom>
    );
};


const mapDispatchToProps = dispatch => bindActionCreators({ save, setTitle }, dispatch);
export default connect(null, mapDispatchToProps)(Add);
