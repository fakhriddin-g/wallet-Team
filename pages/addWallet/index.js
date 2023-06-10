import { getData, postData } from '../../modules/http';
let userData = JSON.parse(localStorage.getItem('user'));
let doc = document
let form = doc.forms.addWallet;
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
   obj.lang = 'RUB';
   obj.color = `linear-gradient(84.37deg, ${getRandomColor()} 2.27%, ${getRandomColor()} 92.26%)`;
   if (b) {
      getData('/cards?walletName=' + obj.walletName)
         .then(res => {
            if (!res.data.length > 0) {
               console.log(res);
               postData("/cards/", obj)
                  .then(() => location.assign('http://localhost:5173/pages/cards/'))
            } else {
               textError(info, p, 'Такой кошелёк уже существует')
            }
         })
   }
}

function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
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