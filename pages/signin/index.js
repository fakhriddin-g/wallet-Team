import { getData } from '../../modules/http';
import { textError } from '../../modules/ui';
let doc = document

let passwordInput = doc.getElementById('password');
let emailInput = doc.getElementById('email');

let info = doc.querySelector('.info');
let p = info.querySelector('p')
let form = document.forms.login;
form.onsubmit = (event) => {
   event.preventDefault();
   let bulean = true;
   let inUser = {};
   let fm = new FormData(form);
   fm.forEach((value, key) => {
      if (value.length > 0) {
         inUser[key] = value;
      } else {
         bulean = false;
      }
   })
   if (bulean) {
      getData("/users?email=" + inUser.email)
         .then(res => {
            if (res.data.length > 0) {
               emailInput.classList.remove('error') 
               if (res.data[0].password === inUser.password) {
                  
                  passwordInput.classList.remove('error')

                  delete res.data[0].password
                  localStorage.setItem('user', JSON.stringify(res.data[0]))
                  location.assign('/')
               } else {
                  passwordInput.classList.add('error')
                  textError(info, p, 'Не правильный пороль');
               }
            } else {
               emailInput.classList.add('error')
               textError(info, p, 'Такого Адресе не существует')
            }
         })
   } else{
      textError(info, p, 'Заполните все поля')
   }
}
