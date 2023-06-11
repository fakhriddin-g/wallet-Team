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
        wallet: resolve(__dirname, 'pages/wallet/index.html'),
        transaction: resolve(__dirname, 'pages/transaction/index.html'),
        signup: resolve(__dirname, 'pages/signup/index.html'),
        login: resolve(__dirname, 'pages/login/index.html'),
      },
    },
  },
})