import Dashboard from '../pages/Dashboard';


export default [
    {
        key: 'dashboard',
        exact: true,
        pathName: '/dashboard',
        component: Dashboard,
        roles: ['guest', 'admin']
    },
];
