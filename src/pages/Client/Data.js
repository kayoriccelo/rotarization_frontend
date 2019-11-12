import React from 'react';
import { Grid } from '@material-ui/core';

import { maskCnpj, maskPhone } from '../../commons/useful';
import { InputText } from '../../components';


export default function Data({ client, handleChange }) {
    return (
        <Grid container id="common">
            <InputText
                label="CNPJ"
                columns={{ md: 4, xs: 12 }}
                maxLength="18"
                value={maskCnpj(client.cnpj)}
                handleChange={handleChange('cnpj')}
            />

            <InputText
                label="Razão social"
                columns={{ md: 8, xs: 12 }}
                maxLength="140"
                value={client.business_name}
                handleChange={handleChange('business_name')}
            />

            <InputText
                label="Email"
                columns={{ md: 8, xs: 12 }}
                maxLength="140"
                value={client.email}
                handleChange={handleChange('email')}
            />

            <InputText
                label="Telefone"
                columns={{ md: 4, xs: 12 }}
                maxLength="11"
                value={maskPhone(client.phone)}
                handleChange={handleChange('phone')}
            />
        </Grid>
    );
};
