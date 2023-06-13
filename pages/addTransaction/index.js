
import { getData, postData } from "../../modules/http";
import { v4 as uuidv4 } from 'uuid';



let userData = JSON.parse(localStorage.getItem('user'));
let wrapper = document.querySelector('.card-container__wrapper');
let form = document.forms.addtransaction;
form.onsubmit = (e) => {
   e.preventDefault();
   let b = true;
   let data = {
      id: uuidv4(),
      user_id: userData?.id,
      time: '4 дня назад'
   }

   let fm = new FormData(form)

   fm.forEach((value, key) => {
      if (value.length > 0) {
         data[key] = value
      } else {
         b = false
      }
   })
   if (b) {
      getData(`/cards/?user_id=${userData?.id}`)
         .then(res => {
            if (res.data.length > 0) {
               let arr = res.data.find(item => item.name === data.wallet_name) || [];
               if (arr !== null) {
                  if (+data.price <= +arr.balance) {
                     data.wallet_id = arr.id;
                     postData('/transaction', data);
                     location.assign('/pages/transaction/')
                  }
               }
            }
         })
   }
}
