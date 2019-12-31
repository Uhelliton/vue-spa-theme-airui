import AuthService from '../services/auth-service'
import UserStorage from '../storage/index'
export default {
  /*!
   * Responsavel para efetivar a autenticacao de um usuario
   * @param context
   * @param payload
   *
   * @returns Promise
   */
  attemptLogin ({ commit, dispatch }, payload) {
    return AuthService.authenticate(payload)
      .then(response => {
        commit('CHANGE_USER', response.data.user)
        commit('CHANGE_TOKEN', response.data.token)
        UserStorage.store(response.data)
        return response
      })
      .catch(error => {
        return error.response
      })
  },

  /*!
   * Responsavel para deslogar um usuário
   * @param commit
   * @param dispatch
   * @param payload
   * @returns {boolean}
   */
  logout ({ commit, dispatch }, payload) {
    commit('CLEAR_USER_SESSION', [])
    UserStorage.clearSession()
    return true
  }
}
