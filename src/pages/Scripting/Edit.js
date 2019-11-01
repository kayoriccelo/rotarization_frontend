import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import api from '../../services/api';
import { FormCustom } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const Edit = ({ instance, load, save, setTitle, id, history }) => {
    const [scripting, setScripting] = useState(null);
    const [waypoints, setWaypoints] = useState([]);

    useEffect(() => {
        if (scripting && waypoints.length === 0) {
            if (scripting.localizations) {
                scripting.localizations.map(item => {
                    api.get(`api/v1/localization/?id=${item.id ? item.id : item}`)
                        .then(res => {
                            handleLocalizationChange(res.data.results)
                            
                            setWaypoints(
                                res.data.results.map(item => ({
                                    location: item.address,
                                    stopover: true
                                }))
                            );
                        });
                });
            };
        };
    }, [scripting]);

    useEffect(() => {
        setTitle({ title: 'Roteirização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        scripting === null && load(id)
            .then(res => scripting !== res && setScripting(res));

        // scripting && setTitle({ subTitle: `${scripting.code} - ${scripting.description}` });
    }, [scripting, instance, id, load, setTitle]);

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
        scripting && <FormCustom
            object={scripting}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            setSubTitle={scripting => setTitle({
                // subTitle: `${scripting.code} - ${scripting.description}`
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


const mapStateToProps = ({ scripting }) => ({ instance: scripting.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
