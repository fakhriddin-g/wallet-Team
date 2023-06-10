import { reload } from "../../main";
import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
let userData = JSON.parse(localStorage.getItem('user'));
let wrapper = document.querySelector('.card-container__wrapper');
let btn = document.querySelector('.card-container__button');

getData('/cards/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (wrapper !== null) reload(res.data, wrapper);
      }
   })
btn.onclick = () => {
   location.assign('http://localhost:5173/pages/addWallet/')
}