import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import setupFontAwesomeIcon from './lib/fontAwesomeIcon';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//styles
import  './index.css'

const pinia = createPinia()
setupFontAwesomeIcon();

createApp(App)
    .use(router)
    .use(pinia)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
