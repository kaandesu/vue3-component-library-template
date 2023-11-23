import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      plugins: [vue()],
      test: {
        globals: true,
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'myComponentLibrary'),
        },
      },
      build: {
        rollupOptions: {
          input: ['index.html'],
        },
      },
    }
  } else {
    return {
      plugins: [vue()],
      test: {
        globals: true,
        setupFiles: 'src/setupTests.ts',
        includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      },
      resolve: {
        alias: {
          '~': resolve(__dirname, 'src', 'myComponentLibrary'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/myComponentLibrary', 'index.ts'),
          name: 'vue3-component-library-template',
          fileName: 'vue3-component-library-template',
        },
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
  }
})
