import { Loading } from 'quasar'

const Preload = {
  /*!
   * Inicia o preload
   * @param message
   */
  show: (message = 'Processando...') => {
    return Loading.show({
      message: `${message}`,
      backgroundColor: 'rgba(255, 255, 255, 0.7)'
    })
  },
  /*!
   * Fecha o preload
   * @param message
   */
  hide: () => {
    return Loading.hide()
  }
}

export default Preload
