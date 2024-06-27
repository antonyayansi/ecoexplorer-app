import { storeToRefs } from 'pinia'
import  { home } from '../store/home'

export default () => {
    const storeRef = storeToRefs(home())

    return {
      ...storeRef,
      getCurrentCityByIp: home().getCurrentCityByIp,
      checkDarkMode: home().checkDarkMode,
      setDarkMode: home().setDarkMode,
      getDataByTipo: home().getDataByTipo
    }
}
