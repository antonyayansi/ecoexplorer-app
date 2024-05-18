import { defineStore } from 'pinia'
import axios from 'axios'

export const auth = defineStore('auth', {
    state: () => ({
        user: null,
        authenticated: false
    }),
    actions: {},
    getters: {}
})