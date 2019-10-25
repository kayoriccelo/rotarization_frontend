import React from 'react';
import { Dashboard, ViewList, Business, SupervisorAccount } from "@material-ui/icons";


export default [
    {
        title: 'Início',
        path: '/',
        icon: (<Dashboard style={{ color: '#24292e' }} />),
        roles: ['guest', 'admin']
    },
    {
        title: 'Cadastros',
        icon: (<ViewList style={{ color: '#24292e' }} />),
        roles: ['admin'],
        menus: [
            {
                title: 'Empresa',
                path: '/registration/company',
                icon: (<Business />),
            },
            {
                title: 'Funcionários',
                path: '/registration/employee',
                icon: (<SupervisorAccount />),
            },
        ],
    },
];
