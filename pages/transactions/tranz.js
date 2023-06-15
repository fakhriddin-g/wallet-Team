import { header } from '../../modules/header'
import { getData } from '../../modules/http';
import { reloadTranz } from "../../modules/ui";
let tranzBlock = document.querySelector('.tranz-block')


let tBody = document.querySelector('.tBody')
let userData = JSON.parse(localStorage.getItem("user"))

let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let btnAdd = document.querySelector('.btn-add')

btnAdd.onclick = () => {
    location.assign('/pages/addTranz/')
}


getData('/transactions/?user_id=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reloadTranz(res.data.slice(0, 5), tBody);
         }
      }
   })







