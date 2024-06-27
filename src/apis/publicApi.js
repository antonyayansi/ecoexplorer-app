import axios from "axios";

const publicApi = axios.create({
    /** Ruta base de la API, funciona siempre y cuando el usuario este logueado */
    baseURL: 'https://ecox.ccore.store/api',
    //baseURL: 'http://localhost:9002/api',
})

export default publicApi