import Vue from 'vue';
import VueRouter from 'vue-router';

import { ROUTES } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...ROUTES],
});

export default router;
