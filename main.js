import { reloadHeader } from "./modules/header";
import { getData } from "./modules/http";
import { reload, reloadTable } from "./modules/ui";

let wrapper = document.querySelector('.card-container__wrapper');
let body = document.querySelector('tbody');
let localedUser = JSON.parse(localStorage.getItem('user')) || {}
let cardMenu = document.querySelector('.card-container');
let null_card = document.querySelector('.null-card');
let null_tr = document.querySelector('.null-transaction');
let tr  = document.querySelector('.transaction')
reloadHeader()

//вызовы
getData('/cards?user_id=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            cardMenu.style.display = 'flex';
            null_card.style.display = 'none'
            reload(res.data.slice(0, 4), wrapper);
         } else {
            cardMenu.style.display = 'none';
            null_card.style.display = 'flex'
         }
      }
   })

getData('/transaction?userId=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reloadTable(res.data.slice(0, 5), body);
            tr.style.display = 'block';
            null_tr.style.display = 'none';
         } else {
            tr.style.display = 'none';
            null_tr.style.display = 'flex';
         }
      }
   })
let btn = document.querySelector('#null-card');
btn.onclick = () => {
   location.assign('/pages/addWallet/')
}
let btn_one = document.querySelector('.null-transaction__btn');
btn_one.onclick = () => {
   location.assign('/pages/addTransaction/')
}