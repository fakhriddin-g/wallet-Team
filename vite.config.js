// vite.config.js
import {
  resolve
} from 'path'
import {
  defineConfig
} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/index.html'),
        catalog: resolve(__dirname, 'pages/catalog/index.html'),
        transactions: resolve(__dirname, 'pages/transactions/index.html'),
      },
    },
  },
})