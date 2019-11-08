import React from 'react';
import { Grid } from '@material-ui/core';

import { InputText, SelectAsyncCustom, SearchMarkerMap, TabCustom } from '../../components';


export default function Data(props) {

    return (
        <TabCustom
            tabsTitle={[
                { label: 'Geral' },
                { label: 'Mapa' }
            ]}
        >
            <Grid container id="common">
                <InputText
                    label="Código"
                    columns={{ xs: 4, sm: 4 }}
                    maxLength="10"
                    value={props.localization.code}
                    handleChange={props.handleChange('code')}
                />

                <InputText
                    label="Descrição"
                    columns={{ xs: 8, sm: 8 }}
                    maxLength="140"
                    value={props.localization.description}
                    handleChange={props.handleChange('description')}
                />

                <SelectAsyncCustom
                    label="Cliente"
                    columns={{ xs: 12, sm: 12 }}
                    url="/api/v1/client"
                    values={props.localization}
                    fieldName="client"
                    displayName="business_name"
                    handleChange={props.handleChange("client")}
                />
            </Grid>
            <Grid id="map">
                <Grid container id="map-information">
                    <InputText
                        disabled
                        columns={{ xs: 12, sm: 12 }}
                        label="Endereço"
                        value={props.localization.address}
                    />

                    <InputText
                        disabled
                        columns={{ xs: 6, sm: 6 }}
                        label="Latitude"
                        value={props.localization.latitude}
                    />

                    <InputText
                        disabled
                        columns={{ xs: 6, sm: 6 }}
                        label="Longitude"
                        value={props.localization.longitude}
                    />
                </Grid>
                <div style={{ padding: 8}}>
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
            </Grid>
        </TabCustom>
    );
};
