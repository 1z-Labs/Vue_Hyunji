import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers' // router import

const app = createApp(App)
app.use(routers) // add router
app.mount('#app')