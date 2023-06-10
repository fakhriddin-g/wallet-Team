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
                addWallet: resolve(__dirname, 'pages/addWallet/index.html'),
                addTransactions: resolve(__dirname, 'pages/addTransactions/index.html'),
            },
        },
    },
})