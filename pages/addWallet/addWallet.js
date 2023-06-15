import { v4 as uuidv4 } from 'uuid'
import { userData } from "../../modules/user";
import { postData } from '../../modules/http';
import axios from 'axios'
let form = document.forms.add
let inps = document.querySelectorAll('input')
let continueBtn = document.querySelector('.continue')
let select = document.querySelector('select')



let isFormValid

form.onsubmit = (e) => {
            e.preventDefault();

           isFormValid = true;

    inps.forEach(inp => {
        if (inp.value.length < 3) {
            inp.classList.add('error');
            continueBtn.classList.add('error-btn')
            isFormValid = false;
        } else {
            inp.classList.remove('error');
            continueBtn.classList.remove('error-btn')
        }
    });

    if(isFormValid) {

        let card = {
            id: uuidv4(),
            user_id: userData?.id
        }
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            card[key] = value
        })
    
        postData('/cards', card)
            .then(res => console.log(res))
    
            location.assign('/pages/wallet/')
    
            form.reset()
    }

}

axios.get(import.meta.env.VITE_CURRENCY_API, {
    headers: {
        apiKey: import.meta.env.VITE_API_KEY
    }
})
.then(res => {
    const symbols = res.data.symbols;
    const keys = Object.keys(symbols);

    console.log(keys);

        for (let index = 0; index < keys.length; index++) {
        let option = document.createElement('option')

        option.textContent = keys
        option.value = keys;

        select.append(option)
        }

        

})