import { storeToRefs } from 'pinia'
import  { ambiente } from '../store/ambiente.js'

export default () => {
    const storeRef = storeToRefs(ambiente())

    return {
      ...storeRef, 
    }
}
