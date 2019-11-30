import React from 'react';
import {
    Dashboard, ViewList, SupervisorAccount
} from "@material-ui/icons";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import MapIcon from '@material-ui/icons/Map';
// import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';


export default [
    {
        title: 'Início',
        path: '/',
        icon: (<Dashboard fontSize="small" />),
        roles: ['guest', 'admin']
    },
    {
        title: 'Cadastros',
        icon: (<ViewList fontSize="small" />),
        roles: ['admin'],
        menus: [
            {
                title: 'Empresa',
                path: '/registration/company',
                icon: (<LocationCityIcon fontSize="small" />),
            },
            {
                title: 'Funcionários',
                path: '/registration/employee',
                icon: (<SupervisorAccount fontSize="small" />),
            },
            {
                title: 'Clientes',
                path: '/registration/client',
                icon: (<EmojiTransportationIcon fontSize="small" />),
            },
            {
                title: 'Localizações',
                path: '/registration/localization',
                icon: (<EditLocationIcon fontSize="small" />),
            },
        ],
    },
    {
        title: 'Roteirização',
        path: '/scripting',
        icon: (<MapIcon fontSize="small" />),
        roles: ['guest', 'admin']
    },
    // {
    //     title: 'Configurações',
    //     path: '/configuration',
    //     icon: (<SettingsApplicationsIcon fontSize="small" />),
    //     roles: ['guest', 'admin']
    // },
];
