import React from 'react';

import { InputText, SearchLocalizationMap, DirectionMarkerMap } from '../../components';


export default function Data(props) {
    return (
        <div style={{ display: 'flex', }}>
            <div style={{ flex: 2 }}>
                <InputText
                    label="Descrição"
                    maxLength="140"
                    value={props.scripting.description}
                    handleChange={props.handleChange('description')}
                />

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

                {/* Localizations */}
            </div>

            <div style={{ flex: 5 }}>
                <DirectionMarkerMap
                    waypoints={props.scripting.localizations}
                    origin={new google.maps.LatLng(-3.8217147, -38.5125515)}
                    distiny={new google.maps.LatLng(-3.8217147, -38.5125515)}
                    center={new google.maps.LatLng(-3.8217147, -38.5125515)}
                />
            </div>
        </div>
    );
};
