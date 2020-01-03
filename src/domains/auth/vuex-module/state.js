import UserStorage from '../storage/index'
export default {
  user: {
    name: 'Uhelliton',
    email: 'uhelliton@uol.com.br'
  },
  token: UserStorage.getToken()
}
