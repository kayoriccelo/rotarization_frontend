import React from 'react';
import { Grid } from '@material-ui/core';


import { maskCnpj, maskPhone } from '../../commons/useful';
import { InputText } from '../../components';


export default function Data({ company, handleChange }) {
    return (
        <Grid container id="common">
            <InputText
                label="Cnpj"
                columns={{ md: 4, xs: 12 }}
                maxLength="18"
                value={maskCnpj(company.cnpj)}
                handleChange={handleChange('cnpj')}
            />

            <InputText
                label="Razão social"
                columns={{ md: 8, xs: 12 }}
                maxLength="140"
                value={company.business_name}
                handleChange={handleChange('business_name')}
            />

            <InputText
                label="Email"
                columns={{ md: 8, xs: 12 }}
                maxLength="100"
                value={company.email}
                handleChange={handleChange('email')}
            />

            <InputText
                label="Telefone"
                columns={{ md: 4, xs: 12 }}
                maxLength="15"
                value={maskPhone(company.phone)}
                handleChange={handleChange('phone')}
            />
        </Grid>
    );
};
