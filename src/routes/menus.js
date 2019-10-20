import React from 'react';
import { Dashboard, ViewList, Business } from "@material-ui/icons";


export default [
    {
        title: 'Início',
        pathName: '/',
        icon: (<Dashboard style={{ color: '#24292e' }} />),
        roles: ['guest', 'admin']
    },
    {
        title: 'Cadastros',
        pathName: '/cadastros',
        icon: (<ViewList style={{ color: '#24292e' }} />),
        roles: ['admin'],
        menus: [
            {
                title: 'Empresa',
                pathName: '/cadastros/empresa',
                icon: (<Business />)
            },
        ],
    },
];
