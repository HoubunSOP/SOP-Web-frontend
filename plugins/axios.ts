import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  let api = axios.create({
    baseUrl: 'https://localhost:8000',
    headers: {
      common: {},
    },
  })
  return {
    provide: {
      api: api,
    },
  }
})
