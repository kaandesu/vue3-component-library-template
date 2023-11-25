import { createApp } from 'vue'
import { useComponentLibrary } from './myComponentLibrary'
import App from './App.vue'
import './style.css'

const app = createApp(App)
// app.use(useComponentLibrary({ prefix: 'My' }))
app.use(
  useComponentLibrary({
    prefix: 'My',
    components: { exclude: ['Header'] },
    plugins: { exclude: [] },
    directives: { exclude: ['customDirective'] },
  })
)
app.mount('#app')
