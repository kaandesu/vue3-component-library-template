import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue3 Component Library template',
  description: 'Vitepress documentation example for vue3-component-library-template repository',
  lang: 'en-US',
  base: '/vue3-component-library-template/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaandesu/vue3-component-library-template' },
    ],
  },
})
