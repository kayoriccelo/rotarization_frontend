import React from 'react';

import { InputText, SelectAsyncCustom, SearchMarkerMap } from '../../components';


export default function Data(props) {
    return (
        <div>
            <InputText
                label="Código"
                maxLength="10"
                value={props.localization.code}
                handleChange={props.handleChange('code')}
            />

            <InputText
                label="Descrição"
                maxLength="140"
                value={props.localization.description}
                handleChange={props.handleChange('description')}
            />

            <SelectAsyncCustom
                label="Cliente"
                url="/api/v1/client"
                values={props.localization}
                fieldName="client"
                displayName="business_name"
                handleChange={props.handleChange("client")}
            />
            <InputText
                disabled
                label="Endereço"
                value={props.localization.address}
            />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', paddingRight: 5 }}>
                    <InputText
                        disabled
                        label="Latitude"
                        value={props.localization.latitude}
                    />
                </div>
                <div style={{ width: '50%', paddingLeft: 5 }}>
                    <InputText
                        disabled
                        label="Longitude"
                        value={props.localization.longitude}
                    />
                </div>
            </div>

            <SearchMarkerMap
                values={props.localization}
                handleLatitude={value => {
                    props.handleChange('latitude')({ target: { value } });
                }}
                handleLongitude={value => {
                    props.handleChange('longitude')({ target: { value } });
                }}
                handleAddress={value => {
                    props.handleChange('address')({ target: { value } });
                }}
            />
        </div>
    );
};
