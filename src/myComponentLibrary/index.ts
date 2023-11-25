import type { App, Plugin } from 'vue'
import * as components from './components'
import * as plugins from './plugins'
import * as directives from './directives'
import type { PluginOptions, ComponentName, DirectiveName, PluginName } from './types'
import './style.css'

export const useComponentLibrary = (pluginOptions: PluginOptions): Plugin => {
  return (app: App) => {
    /* Add Components */
    for (const [name, component] of Object.entries(components) as [ComponentName, any][]) {
      const componentName = `${pluginOptions.prefix}${name}`
      /* Exclude Components */
      if (
        pluginOptions.components &&
        pluginOptions.components.exclude &&
        pluginOptions.components.exclude.includes(name)
      ) {
        log(name, componentName, false)
        continue
      }
      log(name, componentName, true)
      app.component(componentName, component)
    }

    /* Add Plugins */
    for (const [name, plugin] of Object.entries(plugins) as [PluginName, any][]) {
      /* Exclude Plugins */
      if (
        pluginOptions.plugins &&
        pluginOptions.plugins.exclude &&
        pluginOptions.plugins.exclude.includes(name)
      ) {
        log(name, false, false)
        continue
      }
      log(name, false, true)
      app.use(plugin)
    }

    /* Add Directives */
    for (const [name, directive] of Object.entries(directives) as [DirectiveName, any][]) {
      const directiveName = name
      /* Exclude Directives */
      if (
        pluginOptions.directives &&
        pluginOptions.directives.exclude &&
        pluginOptions.directives.exclude.includes(name)
      ) {
        log(name, false, false)
        continue
      }
      log(name, false, true)
      app.directive(directiveName, directive)
    }
  }
}

const log = (base: string, as: string | boolean, succ: boolean) => {
  as =
    as !== false
      ? (as as string).replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`).slice(1)
      : false
  let m = as ? `imported %c as %c <${as}>` : `imported %c %c`
  if (!succ) m = `excluded %c %c`
  console.log(
    `%c${base}%c is %c ${m}`,
    `color: ${succ ? 'green' : 'red'}; font-weight: bold;font-size: 1.2em`,
    'color:gray',
    'color:orange',
    'color:gray',
    'color:teal; font-weight: bold;font-size: 1.2em'
  )
}
