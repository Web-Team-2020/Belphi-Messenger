import Dashboard from './components/DashboardComponent.vue';
import Greeting from './components/GreetingComponent.vue';

export const routes = [
    {
        name: 'greeting',
        path: '/',
        component: Greeting
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    }
];