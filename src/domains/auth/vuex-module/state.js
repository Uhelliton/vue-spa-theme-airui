import UserStorage from '../storage/index'
export default {
  user: UserStorage.getUser(),
  token: UserStorage.getToken()
}
