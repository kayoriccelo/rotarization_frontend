import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import MapIcon from '@material-ui/icons/Map';

import api from '../../services/api';
import { FormCustom, Title } from '../../components';
import Data from './Data';
import { load, save, setTitle } from './store/ducks';


const Edit = ({ load, save, setTitle, id }) => {
    const history = useHistory();
    const [scripting, setScripting] = useState(null);
    const [waypoints, setWaypoints] = useState([]);

    useEffect(() => {
        setTitle({
            title: <Title iconTitle={MapIcon} title="Roteirização" />
        });

        return () => setTitle({ title: '', subTitle: '' });
    }, [setTitle]);

    useEffect(() => {
        !scripting && load(id)
            .then(res => scripting !== res && setScripting(res));

        scripting && setTitle({ 
            subTitle: `${scripting.description}` 
        });
    }, [scripting, id, load, setTitle]);

    useEffect(() => {
        if (scripting)
            if (scripting.localizations)
                if (scripting.localizations.length > 0) {
                    let ids = '';
                    scripting.localizations.map(item => {
                        let itemCount = scripting.localizations[scripting.localizations.length - 1];
                        itemCount = itemCount.id ? itemCount.id : itemCount;
                        item = item.id ? item.id : item;

                        ids += item;
                        ids += itemCount !== item ? ',' : '';
                        return ids;
                    });

                    api.get(`v1/localization/?ids=${ids}`)
                        .then(res => {
                            setWaypoints(
                                res.data.results.map(item => ({
                                    location: item.address,
                                    // icon: iconUser
                                }))
                            );

                            setScripting({
                                ...scripting,
                                localizations: res.data.results
                            });
                        });
                };
    }, [scripting]);

    useEffect(() => {
        if (scripting)
            if (scripting.employees)
                if (scripting.employees.length > 0) {
                    let ids = '';
                    scripting.employees.map(item => {
                        let itemCount = scripting.employees[scripting.employees.length - 1];
                        itemCount = itemCount.id ? itemCount.id : itemCount;
                        item = item.id ? item.id : item;

                        ids += item;
                        ids += itemCount !== item ? ',' : '';
                        return ids;
                    });

                    api.get(`v1/employee/?ids=${ids}`)
                        .then(res => {
                            setScripting({
                                ...scripting,
                                employees: res.data.results
                            });
                        });
                };
    }, [scripting]);

    const handleSubmit = () => save(scripting, history);

    const handleCancel = () => history.push('/scripting');

    const handleChange = name => event => {
        name === 'description' && setTitle({
            subTitle: `${event.target.value}`
        });

        setScripting({
            ...scripting,
            [name]: event.target.value
        });
    };

    const handleLocalizationChange = value => {
        setWaypoints(
            value.map(item => ({
                location: item.address,
                stopover: true
            }))
        );

        setScripting({
            ...scripting,
            localizations: value
        });
    };

    const handleEmployeeChange = value => {
        setScripting({
            ...scripting,
            employees: value
        });
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
                isEdit={true}
                scripting={scripting}
                waypoints={waypoints}
                handleChange={handleChange}
                handleLocalizationChange={handleLocalizationChange}
                handleEmployeeChange={handleEmployeeChange}
            />
        </FormCustom>
    );
};


const mapStateToProps = ({ scripting }) => ({ instance: scripting.instance });
const mapDispatchToProps = dispatch => bindActionCreators({ load, save, setTitle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
