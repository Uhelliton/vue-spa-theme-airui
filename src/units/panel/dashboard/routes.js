import Page404 from 'src/support/common/pages/error/Error404'

const routes = [
  {
    path: '/dashboard',
    component: () => import('src/units/panel/dashboard/views/Dashboard'),
    name: 'dashboard.index',
    meta: {
      requiresAuth: true,
      route: { title: 'Painel' }
    }
  },
  {
    path: '/dashboard/order',
    component: () => import('src/units/panel/dashboard/views/DashboardOrder'),
    name: 'dashboard.order',
    meta: {
      requiresAuth: true,
      route: { title: 'Painel' }
    }
  },
  { path: '/404', component: Page404 },
  { path: '*', redirect: '/404' }
]

export default routes
