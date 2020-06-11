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
    path: '/facultati',
    name: 'Facultati',
    component: () => import('@/views/Faculties/Faculties.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profesori',
    name: 'Profesori',
    component: () => import('@/views/Teachers/Teachers.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/sali',
    name: 'Sali',
    component: () => import('@/views/Rooms/Rooms.vue'),
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
