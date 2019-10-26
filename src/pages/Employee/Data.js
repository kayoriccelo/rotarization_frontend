import React from 'react';

import { maskCpf, maskPhone } from '../../commons/useful';
import { InputText } from '../../components';


export default function Data({ employee, handleChange }) {
    return (
        <div>
            <InputText
                label="Cpf"
                maxLength="14"
                value={maskCpf(employee.cpf)}
                handleChange={handleChange('cpf')}
            />

            <InputText
                label="Nome"
                maxLength="140"
                value={employee.name}
                handleChange={handleChange('name')}
            />

            <InputText
                label="Email"
                maxLength="140"
                value={employee.email}
                handleChange={handleChange('email')}
            />

            <InputText
                label="Telefone"
                maxLength="11"
                value={maskPhone(employee.phone)}
                handleChange={handleChange('phone')}
            />
        </div>
    );
};
