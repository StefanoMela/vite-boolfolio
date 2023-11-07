import { createRouter, createWebHistory } from "vue-router";


import HomePage from '../pages/HomePage.vue';
import PortfolioPage from '../pages/PortfolioPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
            
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage,
        },
        {
            path: '/portfolio/:id/',
            name: 'project-detail',
            component: ProjectPage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
    ]
});

export { router };