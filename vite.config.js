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
                signUp: resolve(__dirname, 'pages/signUp/index.html'),
                addWallet: resolve(__dirname, 'pages/addWallet/index.html'),
                addTransaction: resolve(__dirname, 'pages/addTransaction/index.html'),
                myWallet: resolve(__dirname, 'pages/myWallet/index.html'),
                myTransaction: resolve(__dirname, 'pages/myTransaction/index.html'),
                transactions: resolve(__dirname, 'pages/transactions/index.html'),
            },
        },
    },
})