export const ROUTES = [
  {
    path: '*',
    redirect: '/404',
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
