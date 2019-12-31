/*!
 * As multations altera um estado
 */
import { SessionStorage } from 'quasar'

export default {
  'CHANGE_SETTING' (state, payload) {
    SessionStorage.set(`app.settings.${payload.setting}`, payload.value)
    state[payload.setting] = payload.value
  },
  'SETUP_URL_SETTINGS' (state, payload) {
    let queryParams = payload
    let keys = false
    if (payload.redirect) {
      const str = payload.redirect
      const subs = str.substring(str.indexOf('?') + 1)
      if (str.indexOf('?') >= 0) {
        queryParams = JSON.parse('{"' + decodeURI(subs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
      }
    }
    delete queryParams['redirect']
    keys = Object.keys(queryParams)
    if (keys.length) {
      keys.forEach(key => {
        let value
        switch (queryParams[key]) {
          case 'false':
            value = false
            break
          case 'true':
            value = true
            break
          default:
            value = queryParams[key]
            break
        }
        if (key in state) { state[key] = value }
      })
    }
  }
}
