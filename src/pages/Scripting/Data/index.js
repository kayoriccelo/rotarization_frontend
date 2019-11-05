import React from 'react';
import { Grid } from '@material-ui/core';

import {
    InputText, InputDate, SearchLocalizationMap, DirectionMarkerMap,
    InputTime, TabCustom
} from '../../../components';
import ListLocalization from './ListLocalization';
import ListEmployee from './ListEmployee';
import useStyles from '../styles';


export default function Data(props) {
    const {
        content, contentLocalization, searchOrigin, searchDestiny,
        map, listLocalization, listEmployee
    } = useStyles();
    const { scripting, waypoints, handleChange } = props;

    return (
        <TabCustom
            tabsTitle={[
                { label: 'Geral' },
                { label: 'Mapa' },
                { label: 'Funcionários' }
            ]}
        >
            <Grid container id="common">
                <InputText
                    label="Descrição"
                    colums={{ xs: 12, sm: 12 }}
                    maxLength="140"
                    value={scripting.description}
                    handleChange={handleChange('description')}
                />

                <InputDate
                    label="Data do Início"
                    colums={{ xs: 4, sm: 3 }}
                    value={scripting.date_initial}
                    handleChange={handleChange('date_initial')}
                />

                <InputTime
                    label="Hora do Início"
                    fieldName="hour_initial"
                    colums={{ xs: 2, sm: 3 }}
                    value={scripting.hour_initial}
                    handleChange={handleChange('hour_initial')}
                />

                <InputDate
                    label="Data da Conclusão"
                    colums={{ xs: 4, sm: 3 }}
                    value={scripting.date_final}
                    handleChange={handleChange('date_final')}
                />

                <InputTime
                    label="Hora da Conclusão"
                    fieldName="hour_final"
                    colums={{ xs: 2, sm: 3 }}
                    value={scripting.hour_final}
                    handleChange={handleChange('hour_final')}
                />
            </Grid>
            <Grid className={contentLocalization} id="localizations">
                <div className={content}>
                    <div className={searchOrigin}>
                        <SearchLocalizationMap
                            label="Origem"
                            valueInput={scripting.origin_address}
                            handleChangeLatitude={handleChange('origin_latitude')}
                            handleChangeLongitude={handleChange('origin_longitude')}
                            handleChangeAddress={handleChange('origin_address')}
                        />
                    </div>
                    <div className={searchDestiny}>
                        <SearchLocalizationMap
                            label="Destino"
                            valueInput={scripting.destiny_address}
                            handleChangeLatitude={handleChange('destiny_latitude')}
                            handleChangeLongitude={handleChange('destiny_longitude')}
                            handleChangeAddress={handleChange('destiny_address')}
                        />
                    </div>
                </div>
                <div className={content}>
                    <div className={map}>
                        {waypoints && <DirectionMarkerMap
                            waypoints={waypoints}
                            origin={{
                                lat: scripting.origin_latitude,
                                lng: scripting.origin_longitude
                            }}
                            destiny={{
                                lat: scripting.destiny_latitude,
                                lng: scripting.destiny_longitude
                            }}
                            center={{
                                lat: scripting.origin_latitude,
                                lng: scripting.origin_longitude
                            }}
                        />}
                    </div>
                    <div className={listLocalization}>
                        <ListLocalization
                            localizations={props.scripting.localizations}
                            handleLocalizationChange={props.handleLocalizationChange}
                        />
                    </div>
                </div>
            </Grid>
            <Grid container id="employees">
                <div className={listEmployee}>
                    <ListEmployee
                        employees={props.scripting.employees}
                        handleEmployeeChange={props.handleEmployeeChange}
                    />
                </div>
            </Grid>
        </TabCustom >
    );
};
