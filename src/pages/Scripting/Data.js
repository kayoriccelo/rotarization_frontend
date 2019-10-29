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

            <div style={{ display: 'flex', }}>
                <div style={{ flex: 2 }}>
                    <SearchLocalizationMap
                        label="Origem"
                        valueInput={props.scripting.origin_address}
                        handleChangeLatitude={props.handleChange('origin_latitude')}
                        handleChangeLongitude={props.handleChange('origin_longitude')}
                        handleChangeAddress={props.handleChange('origin_address')}
                    />

                    <SearchLocalizationMap
                        label="Destino"
                        valueInput={props.scripting.destiny_address}
                        handleChangeLatitude={props.handleChange('destiny_latitude')}
                        handleChangeLongitude={props.handleChange('destiny_longitude')}
                        handleChangeAddress={props.handleChange('destiny_address')}
                    />

                    <ListLocalizations
                        localizations={props.scripting.localizations}
                        handleLocalizationChange={props.handleLocalizationChange}
                    />
                </div>

                <div style={{ flex: 5 }}>
                    <DirectionMarkerMap
                        waypoints={props.scripting.localizations}
                        origin={{
                            lat: props.scripting.origin_latitude,
                            lng: props.scripting.origin_longitude
                        }}
                        distiny={{
                            lat: props.scripting.destiny_latitude,
                            lng: props.scripting.destiny_longitude
                        }}
                        center={{
                            lat: props.scripting.origin_latitude,
                            lng: props.scripting.origin_longitude
                        }}
                    />
                </div>
            </div>
        </>
    );
};
