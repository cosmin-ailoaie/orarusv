export const ROUTES = {
  DEFAULT: {
    path: '*',
    redirect: '/',
  },
  HOME: {
    path: '/',
    name: 'Orar USV',
  },
  FACULTIES: {
    path: '/facultati',
    name: 'Facultati',
  },
  TEACHERS: {
    path: '/profesori',
    name: 'Profesori',
  },
  ROOMS: {
    path: '/sali',
    name: 'Sali',
  },
  SCHEDULE: {
    path: '/orar',
    name: 'Orar',
    schedule: (id: any, mode: any) => `/orar?id=${id}&mode=${mode}`,
  },
};
