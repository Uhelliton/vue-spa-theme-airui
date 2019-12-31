import { Notification } from 'element-ui'

const NotifyMessage = {
  success: (message) => {
    return Notification.success({
      title: 'Sucesso',
      message: `${message}`
    })
  },
  /*!
   * Notificacao do tipo warning
   *
   * @param message
   */
  warning: (message) => {
    return Notification.warning({
      title: 'Ops',
      message: `${message}`
    })
  },
  /*!
  * Notificacao do tipo warning
  *
  * @param message
  */
  error: (message) => {
    return Notification.error({
      title: 'Erro',
      message: `${message}`
    })
  }
}

export default NotifyMessage
