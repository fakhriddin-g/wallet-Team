import { v4 as uuidv4 } from 'uuid'
import { user } from "../../modules/user";
import { postData } from '../../modules/http';

let form = document.forms.addWallet




form.onsubmit = (e) => {
   e.preventDefault();
   let card = {
      id: uuidv4(),
      user_id: user?.id
   }
   let b = true;
   let fm = new FormData(form)

   fm.forEach((value, key) => {
      if (value.length > 0) {
         card[key] = value
      } else {
         b = false;
      }
   })
   if (b) {
      postData('/cards', card)
   }
}