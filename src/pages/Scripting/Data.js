import React from 'react';

import { InputText, SearchLocalizationMap, DirectionMarkerMap } from '../../components';
import ListLocalizations from './ListLocalizations';


export default function Data(props) {


    return (
        <>
            <InputText
                label="Descrição"
                maxLength="140"
                value={props.scripting.description}
                handleChange={props.handleChange('description')}
            />
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, padding: '0px 8px 8px 0px', alignItems: 'flex-end' }}>
                    <SearchLocalizationMap
                        label="Origem"
                        valueInput={props.scripting.origin_address}
                        handleChangeLatitude={props.handleChange('origin_latitude')}
                        handleChangeLongitude={props.handleChange('origin_longitude')}
                        handleChangeAddress={props.handleChange('origin_address')}
                    />
                </div>
                <div style={{ flex: 1, padding: '0px 0px 8px 8px', alignItems: 'flex-start' }}>
                    <SearchLocalizationMap
                        label="Destino"
                        valueInput={props.scripting.destiny_address}
                        handleChangeLatitude={props.handleChange('destiny_latitude')}
                        handleChangeLongitude={props.handleChange('destiny_longitude')}
                        handleChangeAddress={props.handleChange('destiny_address')}
                    />
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 5, height: 'calc(78vh - 180px)' }}>
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
                <div style={{ flex: 2, padding: 8 }}>
                    <ListLocalizations
                        localizations={props.scripting.localizations}
                        handleLocalizationChange={props.handleLocalizationChange}
                    />
                </div>
            </div>
        </>
    );
};
