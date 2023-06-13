import { v4 as uuidv4 } from 'uuid'
import { userData } from "../../modules/user";
import { postData } from '../../modules/http';
// let baseUrl = "http://localhost:5050"
let form = document.forms.add
let inps = document.querySelectorAll('input')
let continueBtn = document.querySelector('.continue')

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