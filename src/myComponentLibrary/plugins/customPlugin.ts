import type { App } from 'vue'

const helloPlugin = () => {
  console.log('hello from custom plugin!')
}

const customDirective = () => {
  helloPlugin()
  return (app: App) => {
    // app.component(..)
    // app.directive(..)
    // app.use(..)
  }
}

export default customDirective
