import React from 'react';
import {
    Dashboard, ViewList,  SupervisorAccount
} from "@material-ui/icons";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import MapIcon from '@material-ui/icons/Map';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';


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
                icon: (<LocationCityIcon />),
            },
            {
                title: 'Funcionários',
                path: '/registration/employee',
                icon: (<SupervisorAccount />),
            },
            {
                title: 'Clientes',
                path: '/registration/client',
                icon: (<EmojiTransportationIcon />),
            },
            {
                title: 'Localizações',
                path: '/registration/localization',
                icon: (<EditLocationIcon />),
            },
        ],
    },
    {
        title: 'Roteirização',
        path: '/scripting',
        icon: (<MapIcon style={{ color: '#24292e' }} />),
        roles: ['guest', 'admin']
    },
    {
        title: 'Configurações',
        path: '/configuration',
        icon: (<SettingsApplicationsIcon style={{ color: '#24292e' }} />),
        roles: ['guest', 'admin']
    },
];
