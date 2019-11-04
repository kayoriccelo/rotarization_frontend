import React from 'react';

import {
    InputText, InputDate, SearchLocalizationMap, DirectionMarkerMap,
    InputTime, Checkbox
} from '../../components';
import ListLocalizations from './ListLocalizations';

import useStyles from './styles';


export default function Data(props) {
    const { content, searchOrigin, searchDestiny, map, list } = useStyles();

    return (
        <>
            <InputText
                label="Descrição"
                maxLength="140"
                value={props.scripting.description}
                handleChange={props.handleChange('description')}
            />
            <div className={content}>
                <InputDate
                    label="Início"
                    value={props.scripting.date_initial}
                    handleChange={props.handleChange('date_initial')}
                />

                <InputTime
                    fieldName="hour_initial"
                    value={props.scripting.hour_initial}
                    handleChange={props.handleChange('hour_initial')}
                />

                <Checkbox
                    label="Concluido"
                    fieldName="is_completed"
                    value={props.scripting.is_completed}
                    handleChange={props.handleChange('is_completed')}
                />
            </div>
            <div className={content}>
                <div className={searchOrigin}>
                    <SearchLocalizationMap
                        label="Origem"
                        valueInput={props.scripting.origin_address}
                        handleChangeLatitude={props.handleChange('origin_latitude')}
                        handleChangeLongitude={props.handleChange('origin_longitude')}
                        handleChangeAddress={props.handleChange('origin_address')}
                    />
                </div>
                <div className={searchDestiny}>
                    <SearchLocalizationMap
                        label="Destino"
                        valueInput={props.scripting.destiny_address}
                        handleChangeLatitude={props.handleChange('destiny_latitude')}
                        handleChangeLongitude={props.handleChange('destiny_longitude')}
                        handleChangeAddress={props.handleChange('destiny_address')}
                    />
                </div>
            </div>
            <div className={content}>
                <div className={map}>
                    {props.waypoints && <DirectionMarkerMap
                        waypoints={props.waypoints}
                        origin={{
                            lat: props.scripting.origin_latitude,
                            lng: props.scripting.origin_longitude
                        }}
                        destiny={{
                            lat: props.scripting.destiny_latitude,
                            lng: props.scripting.destiny_longitude
                        }}
                        center={{
                            lat: props.scripting.origin_latitude,
                            lng: props.scripting.origin_longitude
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
        </>
    );
};
