import Vue from 'vue';
import VueRouter from 'vue-router';

import { ROUTES } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...ROUTES],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record: any) => record.meta.requiresAdmin)) {
    if (localStorage.getItem('isAdmin')) {
      next();
      return;
    }
    next('/404');
  } else if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    const loginpath = window.location.pathname;
    next({ name: 'Login', query: { from: loginpath } });
  } else {
    next();
  }
});
export default router;
