// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Portfolio from '../views/PortfolioJo.vue';
import Contact from '../views/ContactMe.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Contact },
  // Ajoute une route spécifique pour 404
  { path: '/404', component: NotFound }, 
  // Route de correspondance pour toutes les autres routes inexistantes
  { path: '/:pathMatch(.*)*', component: NotFound } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
