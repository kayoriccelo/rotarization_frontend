import Home from '../pages/Home';


const routes = [
    {
        key: 'home',
        exact: true,
        pathName: '/',
        component: Home,
        roles: ['guest', 'admin']
    },
];

export default routes;
