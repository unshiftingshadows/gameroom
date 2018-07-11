
export default [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/Login') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/app'),
    children: [
      { path: 'dashboard', name: 'dashboard', component: () => import('pages/Dashboard') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    component: () => import('layouts/room'),
    children: [
      { path: 'room/:id', name: 'room', component: () => import('pages/Room') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
