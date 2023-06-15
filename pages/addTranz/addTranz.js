import { v4 as uuidv4 } from 'uuid'
import { userData } from "../../modules/user";
import { postData } from '../../modules/http';
import { getData } from '../../modules/http';
let form = document.forms.add
let inps = document.querySelectorAll('input')
let continueBtn = document.querySelector('.continue')
let isFormValid
let count = 123332
const select = document.querySelector('select[name="from"]');




getData("/cards/?user_id=" + localedUser.id)
.then(res => {

    for (const item of res.data) {
        console.log(item.name);
        if (item.hasOwnProperty('name')) {
            const existingOption = select.querySelector(`option[value="${item.name}"]`);
            if (!existingOption) {
              const option = document.createElement('option');
              option.value = item.name;
              option.textContent = item.name;
    
              select.append(option);
            }
          }
    }
    
})

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

        let transaction = {
            id: uuidv4(),
            user_id: userData?.id,
            card_id: count
        }
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            transaction[key] = value
        })
    
        postData('/transactions', transaction)
            .then(res => console.log(res))
    
    
            location.assign('/pages/transactions/')
            form.reset()
    }

    count++
}

