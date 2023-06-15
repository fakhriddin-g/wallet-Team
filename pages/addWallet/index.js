import { v4 as uuidv4 } from 'uuid'
import { user } from "../../modules/user";
import { postData } from '../../modules/http';
import axios from 'axios';
import { selectReload } from '../../modules/ui';
let currenet = document.querySelector('#Currency');
axios.get(import.meta.env.VITE_CURRENT_URL, {
   headers: {
      apiKey: import.meta.env.VITE_CURRENT_KEY
   }
})
   .then(res =>{ selectReload(res.data.data , currenet) , console.log(res);
   })
let form = document.forms.addWallet;
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
      location.assign('/pages/cards/')
   }
}
