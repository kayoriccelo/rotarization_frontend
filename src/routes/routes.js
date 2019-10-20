import Home from '../pages/Home';


export default [
    {
        key: 'home',
        exact: true,
        pathName: '/',
        component: Home,
        roles: ['guest', 'admin']
    },
];
