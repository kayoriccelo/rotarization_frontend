import React from 'react';

import { maskCnpj, maskPhone } from '../../commons/useful';
import { InputText } from '../../components';


export default function Data({ client, handleChange }) {
    return (
        <div>
            <InputText
                label="CNPJ"
                maxLength="18"
                value={maskCnpj(client.cnpj)}
                handleChange={handleChange('cnpj')}
            />

            <InputText
                label="Razão social"
                maxLength="140"
                value={client.business_name}
                handleChange={handleChange('business_name')}
            />

            <InputText
                label="Email"
                maxLength="140"
                value={client.email}
                handleChange={handleChange('email')}
            />

            <InputText
                label="Telefone"
                maxLength="11"
                value={maskPhone(client.phone)}
                handleChange={handleChange('phone')}
            />
        </div>
    );
};
