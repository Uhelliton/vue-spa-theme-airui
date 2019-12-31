import { Loading } from 'element-ui'

const Preload = {
  /*!
   * Inicia o preload
   * @param message
   */
  show: (message = 'Processando...') => {
    return Loading.service({
      lock: true,
      text: `${message}`,
      background: 'rgba(255, 255, 255, 0.7)'
    })
  },
  /*!
   * Fecha o preload
   * @param message
   */
  hide: () => {
    return Loading.service().close()
  }
}

export default Preload
