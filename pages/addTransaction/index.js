import { v4 as uuidv4 } from 'uuid'
import { user } from "../../modules/user";
import { getData, postData } from '../../modules/http';

let form = document.forms.addtransaction
console.log(form);
form.onsubmit = (e) => {
   e.preventDefault();
 
   let transaction = {
      id: uuidv4(),
      user_id: user?.id,
      time:  new Date().getHours() + ":" + new Date().getMinutes()
   }

   let fm = new FormData(form)

   fm.forEach((value, key) => {
      transaction[key] = value
   })

   postData('/transaction', transaction)
      .then(res => console.log(res))
      location.assign('/pages/transaction/')
}