import { createRouter, createWebHistory } from 'vue-router';

import App from '../layouts/App.vue';
import App2 from "../layouts/App2.vue";
import App3 from "../layouts/App3.vue";


const routes = [
    {
        path: '/',
        name: 'App2',
        component:App2,
    },
    {
        path: '/nhatrai',
        name:'App3',
        component: App3,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
