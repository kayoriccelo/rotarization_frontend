import Dashboard from '../pages/Dashboard';
import { Company } from '../pages/Company';


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
];
