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
      typeRange: 'day', // day, week, month
      optionsView: ['Temperatura', 'Radiación', 'Presión'],
      viewSelected: 'Temperatura',
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
    async getRanges(){
      try{
        const { data } = await publicApi.get('/rangos', {
          params: {
            tipo: this.typeRange
          }
        })
        this.ranges = data
      }catch(e){
        console.error(e)
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

  }
})
