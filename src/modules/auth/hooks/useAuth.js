import { storeToRefs } from 'pinia'
import  { auth } from '../store/auth'

export default () => {
    const storeRef = storeToRefs(auth())

    return {
      ...storeRef,
    }
}
