import { createRouter, createWebHistory } from "vue-router";


import HomePage from '../pages/HomePage.vue';
import PortfolioPage from '../pages/PortfolioPage.vue';
import ProjectCard from '../components/ProjectCard.vue';

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
            path: '/portfolio/ :slug/',
            name: 'project-detail',
            component: ProjectCard,
        },
    ]
});

export { router };