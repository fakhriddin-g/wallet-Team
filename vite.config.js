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
            signin: resolve(__dirname, 'pages/signin/index.html'),
            signup: resolve(__dirname, 'pages/signup/index.html'),
            cards: resolve(__dirname, 'pages/cards/index.html'),
            card: resolve(__dirname, 'pages/cards/card/index.html'),
            transaction: resolve(__dirname, 'pages/transaction/index.html'),
            addTransaction: resolve(__dirname, 'pages/addTransaction/index.html'),
            addWallet: resolve(__dirname, 'pages/addWallet/index.html'),
         },
      },
   },
})