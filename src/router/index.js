import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginPage.vue';
import PortfolioProfile from '../views/PortfolioProfile.vue';
import PortfolioShowcase from '../views/PortfolioShowcase.vue';
import PortfolioContact from '../views/PortfolioContact.vue';
import PortfolioCreative from '../views/PortfolioCreative.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login, meta:{hideNavBar:true} },
  { path: '/portfolio/profile', component: PortfolioProfile },
  { path: '/portfolio/showcase', component: PortfolioShowcase },
  { path: '/portfolio/contact', component: PortfolioContact },
  { path: '/portfolio/creative', component: PortfolioCreative }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;
  