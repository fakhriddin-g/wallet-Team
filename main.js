// Imports
import { reloadHeader } from "./modules/header"
import { getData } from "./modules/http.requests"
import { reloadTransaction, reloadWallet } from "./modules/ui"
import { user } from "./modules/user"

// Get Elements
let allWallet = document.querySelector('.all-wallets')
let transactionTable = document.querySelector('.transaction-table')
let welcomeName = document.querySelector('.welcome-name')
let welcomeEmail = document.querySelector('.welcome-email')

// Header Reload Function
reloadHeader()

// Welcombox Function
welcomeName.innerHTML = user?.name + ' ' + user?.surname
welcomeEmail.innerHTML = user?.email

// Wallet Reload Function
getData('/cards?user_id=' + user.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      if (res.data.length > 0) {
        reloadWallet(res.data.slice(0, 4), allWallet)
      }
    }
  })

// Transaction Reload Function
getData('/transactions?user_id=' + user.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      reloadTransaction(res.data, transactionTable)
    }
  })
