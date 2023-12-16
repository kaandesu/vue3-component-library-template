import { createApp } from 'vue'
import { useComponentLibrary } from './myComponentLibrary'
import App from './App.vue'
import './style.css'

const app = createApp(App)
// app.use(useComponentLibrary({ prefix: 'My' }))
app.use(
  useComponentLibrary({
    showLogs: true, // default: true
    components: { globallyRegister: false, exclude: [] },
    plugins: { exclude: [] },
    directives: { exclude: [] },
  })
)
app.mount('#app')
