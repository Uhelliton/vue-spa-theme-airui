
const routes = [
  {
    path: '/',
    component: () => import('../support/common/layouts/Auth/index'),
    children: [
      { path: '', component: () => import('../views/system/login/index') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
