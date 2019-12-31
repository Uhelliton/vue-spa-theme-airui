import ApiRequestService from 'src/support/services/api-request-service'

const endpoint = '/auth/users'

const AuthService = {
  /*!
   * Autenticação de usuários
   *
   * @param {Object} data
   * @returns {Promise}
   */
  authenticate: (data) => {
    return ApiRequestService.post(endpoint, data)
  }
}

export default AuthService
