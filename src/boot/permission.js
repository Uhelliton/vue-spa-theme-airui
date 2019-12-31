import store from 'src/domains/auth/vuex-module/index'

/*!
 * @param app
 * @param router
 * @param Vue
 */
export default ({ app, router, Vue }) => {
  /*!
   * Verifica permissoes de acessos das rotas
   * @param route
   * @returns {boolean}
   */
  Vue.prototype.$permissionHasAccess = (route) => {
    const routeName = route
    const permissions = store.state.user.role.permissions || {}
    if (routeName) {
      const hasPermission = permissions.hasOwnProperty(routeName)
      if (hasPermission) {
        return true
      }
    } else throw new Error(`precisa do alias da rota! $permissionHasAccess('dashboard.index')`)
  }

  /*!
   * Verifica se usuario tem ao menos uma permissão em alguma rota
   * @param routes
   * @returns {boolean}
   */
  Vue.prototype.$permissionAnyAccess = (routes) => {
    const routesPrefix = routes
    let permissions = JSON.stringify(store.state.user.role.permissions || {})
    permissions = permissions.replace(/[{}""]/g, '')

    let hasAnyPermission = false
    if (routesPrefix && routesPrefix instanceof Array && routes.length > 0) {
      routesPrefix.forEach((value, index) => {
        if (permissions.includes(value)) {
          hasAnyPermission = true
          return false
        }
      })

      if (hasAnyPermission) {
        return true
      }
    } else throw new Error(`precisa passar um array de permissões!$permissionAnyAccess(['dashboard','report'])`)
  }

  /*!
   * Verifica permissoes de acessos das rotas
   * @use <component v-permission-has-access="'router.name'" />
   * @type {{inserted(*=, *, *): void}}
   */
  const permissionHasAccess = {
    inserted (el, binding, vnode) {
      const { value } = binding
      const routeName = value
      const permissions = store.state.user.role.permissions || {}
      // let { name } = router.history.current // const route = name
      if (routeName) {
        const hasPermission = permissions.hasOwnProperty(routeName)
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el) && el.remove()
        }
      } else throw new Error(`precisa do alias da rota! permission-has-access="'dashboard.index'"`)
    }
  }

  /*!
   * Verifica se usuario tem ao menos uma permissão em alguma rota
   * @use <component v-permission-any-access="['requisition', 'stock']" />
   * @type {{inserted(*=, *, *): void}}
   */
  const permissionAnyAccess = {
    inserted (el, binding, vnode) {
      const { value } = binding
      const routesPrefix = value
      let permissions = JSON.stringify(store.state.user.role.permissions || {})
      permissions = permissions.replace(/[{}""]/g, '')

      let hasAnyPermission = false
      if (routesPrefix && routesPrefix instanceof Array && value.length > 0) {
        routesPrefix.forEach((value, index) => {
          if (permissions.includes(value)) {
            hasAnyPermission = true
            return false
          }
        })

        if (!hasAnyPermission) {
          Vue.nextTick(() => {
            el.parentNode && el.parentNode.removeChild(el) && el.remove()
          })
        }
      } else throw new Error(`precisa passar um array de permissões! permission-any-access="['admin','master']"`)
    }
  }

  //  this.$refs.myTable.$forceUpdate()
  Vue.directive('permission-has-access', permissionHasAccess)
  Vue.directive('permission-any-access', permissionAnyAccess)
}
