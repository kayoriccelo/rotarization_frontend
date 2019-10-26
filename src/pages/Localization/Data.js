import React from 'react';

import { InputText, SelectAsyncCustom } from '../../components';


export default function Data({ localization, handleChange }) {
    return (
        <div>
            <InputText
                label="Código"
                maxLength="10"
                value={localization.code}
                handleChange={handleChange('code')}
            />

            <InputText
                label="Descrição"
                maxLength="140"
                value={localization.description}
                handleChange={handleChange('description')}
            />

            <SelectAsyncCustom 
                label="Cliente" 
                url="/api/v1/client" 
                values={localization} 
                fieldName="client"
                displayName="business_name"
                handleChange={handleChange("client")} />
        </div>
    );
};
