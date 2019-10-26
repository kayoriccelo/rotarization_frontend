import Dashboard from '../pages/Dashboard';
import { Company } from '../pages/Company';
import { AddEmployee, EditEmployee, ListEmployee } from '../pages/Employee';


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
];
