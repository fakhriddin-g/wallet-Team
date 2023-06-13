
import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
import { reload } from "../../modules/ui";

reloadHeader()

let userData = JSON.parse(localStorage.getItem('user'));
let wrapper = document.querySelector('.card-container__wrapper');
let btn = document.querySelector('.card-container__button');

getData('/cards?user_id=' + userData.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         reload(res.data, wrapper);
      }
   })


btn.onclick = () => {
   location.assign('/pages/addWallet/')
}