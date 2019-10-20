import React from 'react';
import { Dashboard, List, House } from '@material-ui/icons';


export default [
    {
        label: 'Início',
        icon: <Dashboard />,
        pathName: '/',
    },
    {
        label: 'Cadastros',
        icon: <List />,
        pathName: '/cadastros',
        routes: [
            {
                label: 'Empresa',
                icon: <House />,
                pathName: '/cadastros/empresa'
            }
        ]
    },
];
