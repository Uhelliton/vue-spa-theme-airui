import { notification } from 'ant-design-vue'

const NotifyMessage = {
  success: (message) => {
    return notification.success({
      message: 'Sucesso',
      description: `${message}`
    })
  },
  /*!
   * Notificacao do tipo warning
   *
   * @param message
   */
  warning: (message) => {
    return notification.warning({
      message: 'Ops',
      description: `${message}`
    })
  },
  /*!
  * Notificacao do tipo warning
  *
  * @param message
  */
  error: (message) => {
    return notification.error({
      message: 'Erro',
      description: `${message}`
    })
  }
}

export default NotifyMessage
