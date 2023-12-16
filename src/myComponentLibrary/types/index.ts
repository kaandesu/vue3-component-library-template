import * as components from '../components'
import * as plugins from '../plugins'
import * as directives from '../directives'
export * from '../index'
export * from '../components'
export type ComponentName = keyof typeof components
export type PluginName = keyof typeof plugins
export type DirectiveName = keyof typeof directives

export type PluginOptions = {
  showLogs?: boolean
  components?: {
    globallyRegister: boolean
    exclude?: ComponentName[]
  }
  plugins?: {
    globallyRegister?: boolean
    exclude: PluginName[]
  }
  directives?: {
    globallyRegister?: boolean
    exclude: DirectiveName[]
  }
}
