export const ROUTES = [
  {
    path: '*',
    redirect: '/404',
  },

  {
    path: '/',
    name: 'Orar USV',
    component: () => import('@/views/Main/Home.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/404',
    name: 'Page not found',
    component: () => import('@/views/404.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
