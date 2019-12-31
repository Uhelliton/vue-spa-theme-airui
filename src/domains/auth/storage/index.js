import { SessionStorage } from 'quasar'

let sessionUserPrefix = 'user'
const UserStorage = {
  store: (data) => {
    SessionStorage.set('user', JSON.stringify(data))
  },

  getUser: () => {
    let hasUser = (SessionStorage.has(sessionUserPrefix))
    if (hasUser) {
      const data = JSON.parse(SessionStorage.getItem(sessionUserPrefix))
      return data.user
    }
    return {
      name: '',
      email: ''
    }
  },

  getToken: () => {
    let hasUser = (SessionStorage.has(sessionUserPrefix))
    if (hasUser) {
      const data = JSON.parse(SessionStorage.getItem(sessionUserPrefix))
      return data.token
    }
    return ''
  },

  clearSession: () => {
    SessionStorage.remove(sessionUserPrefix)
  }
}

export default UserStorage
