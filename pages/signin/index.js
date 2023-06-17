import { getData } from '../../modules/http';
let doc = document
function textError(info, p, text) {
   p.innerText = text;
   info.style.display = 'flex';
   setTimeout(() => {
      info.style.marginBottom = '120px'
      info.style.opacity = 1;
      setTimeout(() => {
         info.style.marginBottom = '0px'
         info.style.opacity = 0;
         setTimeout(() => {
            info.style.display = 'none'
         }, 300);
      }, 1600)
   }, 100)
}
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
