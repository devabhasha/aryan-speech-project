import About from './js/About';
import App from './js/App';
import RootDetails from './js/RootDetails';
import RootFormation from './js/RootFormation';

const routes = [
    {
        path: '/',
        component: App,
        indexRoute: { component: RootFormation },
        childRoutes: [
            {
                path: 'root/:root',
                component: RootDetails
            },
            {
                path: 'about',
                component: About
            }
        ]
    }
];

export default routes;
