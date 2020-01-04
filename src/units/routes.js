import { routes as auth } from './auth/index'
import { routes as dashboard } from './panel/dashboard/index'
// import { routes as company } from './company/index'
// import { routes as supplier } from './supplier/index'
// import { routes as user } from './settings/user/index'
// import { routes as permission } from './settings/permission/index'

export default [
  ...auth,
  ...dashboard
]
