import { getData, postData } from '../../modules/http';
let doc = document
let inputs = doc.querySelectorAll('input');
let info = doc.querySelector('.info');
let p = info.querySelector('p');
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
let regularMap = {
   firstname: /^\p{Lu}[a-zA-z\-]+$/u,
   lastname: /^\p{Lu}[a-zA-z\-]+$/u,
   email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
   password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}
let form = doc.forms.reg;
form.onsubmit = (event) => {
   event.preventDefault();
   let b = true;
   let obj = {};
   let fm = new FormData(form);
   fm.forEach((value, key) => {
      if (value.length > 0) {
         obj[key] = value
      } else {
         b = false;
      }
   })
   inputs.forEach(input => {
      if (!regularMap[input.name].test(input.value)) {
         b = false;
         input.classList.add('error');
         textError(info, p, 'Все поля обязательны для правельного заполнения')
      } else {
         input.classList.remove('error')
      }
   })
   if (b) {
      getData('/users?email=' + obj.email)
         .then(res => {
            if (!res.data.length > 0) {
               postData("/users", obj)
                  .then(() => location.assign('http://localhost:5173/pages/signin/'))
            } else {
               textError(info, p, 'Такой акк уже существует')
            }
         })
   }
}
