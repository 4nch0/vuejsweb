​import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import PortfolioProfile from '../views/PortfolioProfile.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import PortfolioContact from '../views/PortfolioContact.vue';
import PortfolioCreative from '../views/PortfolioCreative.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/portfolio/profile', component: PortfolioProfile },
  { path: '/portfolio/showcase', component: PortfolioShowcase },
  { path: '/portfolio/contact', component: PortfolioContact },
  { path: '/portfolio/creative', component: PortfolioCreative }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
  