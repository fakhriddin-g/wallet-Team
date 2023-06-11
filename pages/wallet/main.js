import { reloadHeader } from "../../modules/header";
import { getData, postData } from "../../modules/http.requests";
import { reloadWallet } from "../../modules/ui";
import { user } from "../../modules/user";

let welcomeEmail = document.querySelector('.welcome-email')
let allWallet = document.querySelector('.all-wallets')
let addWalletBtn = document.querySelector('.add-wallet-btn')
let modalBg = document.querySelector('.modal-bg')
let modalBtn = document.querySelector('.modal-btn')
let form = document.forms.wallet

reloadHeader()

// Get Local Storage
// let localData = JSON.parse(localStorage.getItem('user'))


// Welcombox Function
welcomeEmail.innerHTML = user?.email

// Wallet Function
getData('/cards?user_id=' + user?.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      if (res.data.length > 0) {
        reloadWallet(res.data, allWallet)
      }
    }
  })

addWalletBtn.onclick = () => {
  modalBg.style.display = 'flex'
}

form.onsubmit = (e) => {
  e.preventDefault()

  let walletData = {
    user_id: user?.id
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    walletData[key] = value
  })

  postData('/cards', walletData)
  modalBg.style.display = 'none'
}