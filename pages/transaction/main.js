import { reloadHeader } from "../../modules/header";
import { getData, postData } from "../../modules/http.requests";
import { reloadTransaction } from "../../modules/ui";
import { user } from "../../modules/user";

let welcomeEmail = document.querySelector('.welcome-email')
let transactionTable = document.querySelector('.transaction-table')
let addWalletBtn = document.querySelector('.add-transaction-btn')
let modalBg = document.querySelector('.modal-bg')
let modalBtn = document.querySelector('.modal-btn')
let form = document.forms.transaction

reloadHeader()

// Get Local Storage
// let localData = JSON.parse(localStorage.getItem('user'))


// Welcombox Function
welcomeEmail.innerHTML = user?.email

// Wallet Function

  
// Transaction Function
getData('/transactions?user_id=' + user.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      reloadTransaction(res.data, transactionTable)
    }
  })

addWalletBtn.onclick = () => {
  modalBg.style.display = 'flex'
}

form.onsubmit = (e) => {
  e.preventDefault()

  let transactionData = {
    user_id: user.id
  }

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    transactionData[key] = value
  })

  // getData('/cards?user_id=' + user.id)
  // .then(res => {
  //   let cards_id = res.data.forEach(id => {
  //     transactionData.card_id = id.id
  //   })
  // })
  
  console.log(transactionData);
  
  postData('/transactions', transactionData)
  modalBg.style.display = 'none'
}