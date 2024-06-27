import { defineStore } from 'pinia'
import axios from 'axios'
import publicApi from '../../../apis/publicApi'

export const home = defineStore('home', {
  state: () => ({
      isTheme: 'default',
      isDark: false,
      menus: [
        {
          name: 'Home',
          icon: 'house',
          path: '/',
        },
        {
          name: 'Discover',
          icon: 'compass',
          path: '/discover',
        },
      ],
      cities: [],
      current_city: null,
      ranges: [],
      typeRange: 'Semana', // Dia, Semana
      optionsView: ['Temperatura', 'IndiceUV', 'Humendad'],
      viewSelected: 'Temperatura',
      temperature: 0,
      history: [], //{dia: 1, promedio: 20}
      devices: []
  }),
  actions: {
    async getCurrentCityByIp() {
      if (!localStorage.getItem('city')) {
        try {
          const { data } = await axios.get('https://ipapi.co/json/')
          this.cities.push(data)
          if(this.cities.length){
            this.current_city = data
            localStorage.setItem('city', JSON.stringify(this.cities))
            localStorage.setItem('current_city', JSON.stringify(this.current_city))
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        this.cities = JSON.parse(localStorage.getItem('city'))
        this.current_city = JSON.parse(localStorage.getItem('current_city'))
      }
    },
    checkDarkMode(){
      if(localStorage.getItem('isDark')){
        this.isDark = true
      }else{
        this.isDark = false
      }
    },
    setDarkMode(){
      if(!this.isDark){
        this.isDark = true
        localStorage.setItem('isDark', true)
      }else{
        this.isDark = false
        localStorage.removeItem('isDark')
      }
    },
    //datos para ChartLine
    async getDataByTipo(){
        try{
          const { data } = await publicApi.get('/get-data-format', {
            params: {
              tipo: this.viewSelected,
              rango: this.typeRange
            }
          })
          this.history = data
          if(data.length){
            if(this.viewSelected == 'Temperatura'){
              this.temperature = data[data.length - 1]?.promedio
            }
          }
        }catch(e){
          console.log(e)
        }
    }
  }
})
