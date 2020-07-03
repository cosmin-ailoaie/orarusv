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
      requiresAuth: false,
    },
  },
  {
    path: '/facultati',
    name: 'Facultati',
    component: () => import('@/views/Faculties/Faculties.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/profesori',
    name: 'Profesori',
    component: () => import('@/views/Teachers/Teachers.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/sali',
    name: 'Sali',
    component: () => import('@/views/Rooms/Rooms.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/favorite',
    name: 'Orare Favorite',
    component: () => import('@/views/Favorites/Favorites.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/orar',
    name: 'Orar',
    component: () => import('@/views/Schedule/Schedule.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/orar/mode',
    name: 'Orar Profesor',
    component: () => import('@/views/Schedule/Schedule.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/404',
    name: 'Page not found',
    component: () => import('@/views/404.vue'),
    meta: {
      requiresAuth: false,
    },
  },
];
