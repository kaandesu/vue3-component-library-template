import { createApp } from 'vue'
import { useComponentLibrary } from './myComponentLibrary'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(useComponentLibrary())
app.mount('#app')
