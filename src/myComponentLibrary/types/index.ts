import * as components from '../components'
import * as plugins from '../plugins'
import * as directives from '../directives'

export type ComponentName = keyof typeof components
export type PluginName = keyof typeof plugins
export type DirectiveName = keyof typeof directives

export type PluginOptions = {
  components: {
    exclude?: ComponentName[]
  }
  plugins: {
    exclude?: PluginName[]
  }
  directives: {
    exclude?: DirectiveName[]
  }
  prefix: string
}
