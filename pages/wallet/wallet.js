import { header } from '../../modules/header'
import { getData } from '../../modules/http';
import { reload } from "../../modules/ui";

let userData = JSON.parse(localStorage.getItem("user"))

getData('/cards/?user_id=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reload(res.data.slice(0, 4), cardBlock);
         }
      }
   })



let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let cardBlock = document.querySelector('.card-block')




let btnAdd = document.querySelector('.btn-add')

btnAdd.onclick = () => {
    location.assign('/pages/addWallet/')
}