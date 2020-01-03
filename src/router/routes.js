
const routes = [
  {
    path: '/login',
    component: () => import('../support/common/layouts/Auth/index'),
    children: [
      { path: '', component: () => import('../views/system/login/index') }
    ]
  },
  {
    path: '/',
    redirect: 'dashboard/ecommerce',
    component: () => import('../support/common/layouts/App/index'),
    children: [
      { path: 'dashboard/ecommerce', component: () => import('../views/dashboard/ecommerce/index') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('@support/common/layouts/error/Error404.vue')
  })
}

export default routes
