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
        setTitle({ title: 'Roteirização' });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        scripting === null && load(id).then(res => setScripting(instance));

        scripting && setTitle({ subTitle: `${scripting.description}` });
    }, [scripting, instance, id, load, setTitle]);

    useEffect(() => {
        if (instance)
            if (instance.localizations)
                if (instance.localizations.length > 0) {
                    let ids = '';
                    instance.localizations.map(item => {
                        let itemCount = instance.localizations[instance.localizations.length - 1];
                        itemCount = itemCount.id ? itemCount.id : itemCount;
                        item = item.id ? item.id : item;

                        ids += item;
                        ids += itemCount !== item ? ',' : '';
                    });

                    api.get(`api/v1/localization/?ids=${ids}`)
                        .then(res => {
                            setWaypoints(
                                res.data.results.map(item => ({
                                    location: item.address,
                                    stopover: true
                                }))
                            );

                            setScripting({ ...instance, localizations: res.data.results });
                        });
                };
    }, [instance]);


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
                location: item.address,
                stopover: true
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


const mapStateToProps = ({ scripting }) => ({ instance: scripting.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
