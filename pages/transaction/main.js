import { reloadHeader } from "../../modules/header";
import { getData, postData } from "../../modules/http.requests";
import { regexPattern } from "../../modules/regex";
import { reloadTransaction } from "../../modules/ui";
import { user } from "../../modules/user";

let welcomeEmail = document.querySelector('.welcome-email')
let transactionTable = document.querySelector('.transaction-table')
let addTransactionBtn = document.querySelector('.add-transaction-btn')
// Modal
let modalBg = document.querySelector('.modal-bg')
let modalBtn = document.querySelector('.modal-btn')
let inputs = document.querySelectorAll('.modal input')
// Close Btn for Modal
let closeBtn = document.querySelector('.close')
let minimizeBtn = document.querySelector('.minimize')
let form = document.forms.transaction
let selectBox = document.querySelector('.select')

reloadHeader()

// Welcombox Function
welcomeEmail.innerHTML = user?.email

// Transaction Function
getData('/transactions?user_id=' + user.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      reloadTransaction(res.data, transactionTable)
    }
  })

addTransactionBtn.onclick = () => {
  modalBg.style.display = 'flex'
  setTimeout(() => {
    modalBg.style.scale = '1'
  }, 4);
}


form.onsubmit = (e) => {
  e.preventDefault()
  
}

function save() {
  let transactionData = {
    user_id: user.id
  }
  
  let fm = new FormData(form)
  
  fm.forEach((value, key) => {
    transactionData[key] = value
  })
  
  let newDate = (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear()
  transactionData.date = newDate
 
  console.log(transactionData);
  
  postData('/transactions', transactionData)
  modalBg.style.display = 'none'
}

inputs.forEach(input => {
  modalBtn.onclick = () => {
    if (input.value || input.value !== '0') {
      save()
    }
    else {
      alert('Fill all the inputs')
    }
  }
})

getData('/cards?user_id=' + user.id)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      select(res.data)
    }
  })

function select(arr) {
  for (const option of arr) {
    let selectItem = document.createElement('option')
    selectItem.innerHTML = option.name
    selectBox.append(selectItem)
  }
}

closeBtn.onclick = () => {
  modalBg.style.scale = '0'
  setTimeout(() => {
    modalBg.style.display = 'none'
  }, 200);
}

minimizeBtn.onclick = () => {
  if (modalBg.classList.contains('minimize-bg')) {
    modalBg.classList.remove('minimize-bg')
  } else {
    modalBg.classList.add('minimize-bg')
  }
}