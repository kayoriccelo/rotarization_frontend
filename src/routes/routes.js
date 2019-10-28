import Dashboard from '../pages/Dashboard';
import { Company } from '../pages/Company';
import { AddEmployee, EditEmployee, ListEmployee } from '../pages/Employee';
import { AddClient, EditClient, ListClient } from '../pages/Client';
import { AddLocalization, EditLocalization, ListLocalization } from '../pages/Localization';
import Scripting from '../pages/Scripting';



export default [
    {
        key: 'dashboard',
        exact: true,
        path: '/dashboard',
        component: Dashboard,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-company',
        exact: true,
        path: '/registration/company',
        component: Company,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-employee-new',
        exact: true,
        path: '/registration/employee/new',
        component: AddEmployee,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-employee-edit',
        exact: true,
        path: '/registration/employee/:id',
        component: EditEmployee,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-employee',
        exact: true,
        path: '/registration/employee',
        component: ListEmployee,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-client-new',
        exact: true,
        path: '/registration/client/new',
        component: AddClient,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-client-edit',
        exact: true,
        path: '/registration/client/:id',
        component: EditClient,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-client',
        exact: true,
        path: '/registration/client',
        component: ListClient,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-localization-new',
        exact: true,
        path: '/registration/localization/new',
        component: AddLocalization,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-localization-edit',
        exact: true,
        path: '/registration/localization/:id',
        component: EditLocalization,
        roles: ['guest', 'admin']
    },
    {
        key: 'registration-localization',
        exact: true,
        path: '/registration/localization',
        component: ListLocalization,
        roles: ['guest', 'admin']
    },
    {
        key: 'scripting',
        exact: true,
        path: '/scripting',
        component: Scripting,
        roles: ['guest', 'admin']
    },
];
