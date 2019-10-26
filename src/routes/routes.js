import Dashboard from '../pages/Dashboard';
import { Company } from '../pages/Company';
import { AddEmployee, EditEmployee, ListEmployee } from '../pages/Employee';
import { AddClient, EditClient, ListClient } from '../pages/Client';


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
];
