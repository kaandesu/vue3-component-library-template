import type { App, Plugin } from 'vue'
import * as components from './components'
import type { PluginOptions } from './types'
import './style.css'

export const useComponentLibrary = (pluginOptions?: PluginOptions) => {
  return (app: App) => {
    for (const [name, component] of Object.entries(components)) {
      console.log(
        `%c${name}%c is %c added`,
        'color: green; font-weight: bold;font-size: 1.2em',
        'color:gray',
        'color:orange'
      )
      app.component(name, component)
    }
  }
}
