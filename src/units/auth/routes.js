import Auth from './views/AuthIndex'
const routes = [
  {
    path: '/',
    component: Auth,
    name: 'login.index',
    meta: {
      requiresAuth: false,
      hidden: true,
      layout: 'login'
    }
  }
]

export default routes
