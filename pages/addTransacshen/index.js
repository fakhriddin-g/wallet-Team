import { getData, postData } from '../../modules/http';
let userData = JSON.parse(localStorage.getItem('user'));
let doc = document
let form = doc.forms.addTransacshen;
let info = doc.querySelector('.info');
let p = info.querySelector('p');
form.onsubmit = (event) => {
   event.preventDefault();
   let b = true;
   let obj = {};
   let fm = new FormData(form);
   fm.forEach((value, key) => {
      if (value.length > 0) {
         obj[key] = value;
      } else {
         b = false;
      }
   })
   obj.userId = userData.id;
   obj.time = "4 дня назад";
   if (b) {
      getData('/cards/?=' + obj.fromWallet)
         .then(res => {
            if (res.data.length > 0) {
               obj.welletId = res.data[0].id;
               postData("/transacshen/", obj)
                  .then(() => location.assign('http://localhost:5173/pages/transacshen/'))
            } else {
               textError(info, p, 'Такого кошелёк не существует')
            }
         })

   }
}

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