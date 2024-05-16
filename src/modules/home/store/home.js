import { defineStore } from 'pinia'
import axios from 'axios'

export const home = defineStore('home', {
  state: () => ({
      isTheme: 'default',
      isDark: true,
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
      current_city: null
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
    }
  }
})
