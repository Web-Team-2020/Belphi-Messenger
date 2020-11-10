import Greeting from './components/GreetingComponent.vue';
import Dashboard from './components/DashboardComponent.vue';
import Chats from './components/ChatsComponent.vue';
import Info from'./components/InfoComponent.vue';
import About from './components/AboutComponent.vue';

export const routes = [
    {
        name: 'greeting',
        path: '/',
        component: Greeting
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                name: 'home',
                path: '',
                component: Chats
            },
            {
                name: 'info',
                path: 'info',
                component: Info
            },
            {
                name: 'contacts',
                path: 'contacts',
                component: Dashboard
            },
            {
                name: 'settings',
                path: 'settings',
                component: Dashboard
            },
            {
                name: 'about',
                path: 'about',
                component: About
            }
        ]
    }
];