import React from 'react';

import {
    InputText, InputDate, SearchLocalizationMap, DirectionMarkerMap,
    InputTime, TabCustom
} from '../../../components';
import ListLocalization from './ListLocalization';
import ListEmployee from './ListEmployee';
import {
    StyledGridContainer, StyledContent, StyledSearch, StyledMap, StyledListLocalization, StyledListEmployee
} from '../styled';


export default function Data(props) {
    const { scripting, waypoints, handleChange } = props;

    return (
        <TabCustom
            tabsTitle={[
                { label: 'Geral' },
                { label: 'Mapa' },
                { label: 'Funcionários' }
            ]}
        >
            <StyledGridContainer container id="common">
                <InputText
                    label="Descrição"
                    columns={{ xs: 12, sm: 12 }}
                    maxLength="140"
                    value={scripting.description}
                    handleChange={handleChange('description')}
                />

                <InputDate
                    label="Data do Início"
                    columns={{ xs: 12, sm: 6, md: 3 }}
                    value={scripting.date_initial}
                    handleChange={handleChange('date_initial')}
                />

                <InputTime
                    label="Hora do Início"
                    fieldName="hour_initial"
                    columns={{ xs: 12, sm: 6, md: 3 }}
                    value={scripting.hour_initial}
                    handleChange={handleChange('hour_initial')}
                />

                <InputDate
                    label="Data da Conclusão"
                    columns={{ xs: 12, sm: 6, md: 3 }}
                    value={scripting.date_final}
                    handleChange={handleChange('date_final')}
                />

                <InputTime
                    label="Hora da Conclusão"
                    fieldName="hour_final"
                    columns={{ xs: 12, sm: 6, md: 3 }}
                    value={scripting.hour_final}
                    handleChange={handleChange('hour_final')}
                />
            </StyledGridContainer>
            <StyledGridContainer id="map">
                <StyledContent>
                    <StyledSearch direction="left">
                        <SearchLocalizationMap
                            label="Origem"
                            valueInput={scripting.origin_address}
                            handleChangeLatitude={handleChange('origin_latitude')}
                            handleChangeLongitude={handleChange('origin_longitude')}
                            handleChangeAddress={handleChange('origin_address')}
                        />
                    </StyledSearch>
                    <StyledSearch direction="right">
                        <SearchLocalizationMap
                            label="Destino"
                            valueInput={scripting.destiny_address}
                            handleChangeLatitude={handleChange('destiny_latitude')}
                            handleChangeLongitude={handleChange('destiny_longitude')}
                            handleChangeAddress={handleChange('destiny_address')}
                        />
                    </StyledSearch>
                </StyledContent>
                <StyledContent>
                    <StyledMap>
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
                    </StyledMap>
                    <StyledListLocalization>
                        <ListLocalization
                            localizations={props.scripting.localizations}
                            handleLocalizationChange={props.handleLocalizationChange}
                        />
                    </StyledListLocalization>
                </StyledContent>
            </StyledGridContainer>
            <StyledGridContainer container id="employees">
                <StyledListEmployee>
                    <ListEmployee
                        employees={props.scripting.employees}
                        handleEmployeeChange={props.handleEmployeeChange}
                    />
                </StyledListEmployee>
            </StyledGridContainer>
        </TabCustom >
    );
};
