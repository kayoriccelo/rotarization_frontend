import React from 'react';
import { Grid } from '@material-ui/core';

import {
    InputText, InputDate, SearchLocalizationMap, DirectionMarkerMap,
    InputTime, Checkbox, TabCustom
} from '../../components';
import ListLocalizations from './ListLocalizations';

import useStyles from './styles';


export default function Data(props) {
    const { content, searchOrigin, searchDestiny, map, list } = useStyles();
    const { scripting, waypoints, handleChange } = props;

    return (
        <TabCustom
            tabsTitle={[
                { label: 'Geral' },
                { label: 'Roteirização' },
                { label: 'Funcionários' }
            ]}
        >
             <Grid container id="geral">
                <InputText
                    label="Descrição"
                    colums={{ xs: 7, sm: 7 }}
                    maxLength="140"
                    value={scripting.description}
                    handleChange={handleChange('description')}
                />

                <InputDate
                    label="Data Início"
                    colums={{ xs: 3, sm: 3 }}
                    value={scripting.date_initial}
                    handleChange={handleChange('date_initial')}
                />

                <InputTime
                    label="Hora Início"
                    fieldName="hour_initial"
                    colums={{ xs: 2, sm: 2 }}
                    value={scripting.hour_initial}
                    handleChange={handleChange('hour_initial')}
                />
                
                <div>
                    <Checkbox
                        label="Concluido"
                        fieldName="is_completed"
                        value={scripting.is_completed}
                        handleChange={handleChange('is_completed')}
                    />
                </div>
            </Grid>
            <div id="localizations">
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
                    <div className={list}>
                        <ListLocalizations
                            localizations={props.scripting.localizations}
                            handleLocalizationChange={props.handleLocalizationChange}
                        />
                    </div>
                </div>
            </div>
            <div id="employees">

            </div>
        </TabCustom>
    );
};
