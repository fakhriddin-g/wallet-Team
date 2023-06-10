let userData = JSON.parse(localStorage.getItem('user'));
let textsMap = {
   0: 'Главная',
   1: 'Мои кошельки',
   2: 'Мои транзакции'
}
let linksMap = {
   0: '/',
   1: '/pages/cards/',
   2: '/pages/transaction/'
}
export function reloadHeader() {
   let doc = document;
   let body = doc.body;
   let header = doc.createElement('header');
   let container = doc.createElement('div');
   let nav = doc.createElement('nav');
   for (let i of [0, 1, 2]) {
      let a = doc.createElement('a');
      //style
      a.classList.add('header__text');
      //inner
      a.innerText = textsMap[i];
      a.href = linksMap[i];
      //append
      nav.append(a);
   }
   let userMenu = doc.createElement('div');
   let email = doc.createElement('a');
   let img = doc.createElement('img');

   //style
   header.classList.add('header');
   container.className = 'header__container  container';
   nav.classList.add('header__nav');
   userMenu.classList.add('header__user-menu');
   email.classList.add('header__text');

   //inner
   email.innerText = userData.email;
   img.src = '../../public/icons/exit.svg';
   img.alt = 'exit';
   img.height = '18';
   img.width = '18';

   //append
   userMenu.append(email, img);
   container.append(nav, userMenu);
   header.append(container);
   body.prepend(header);

   // modal
   let modal = doc.querySelector('.modal');
   let btn_true = doc.querySelector('[data-true]');
   let btn_false = doc.querySelector('[data-false]');
   img.onclick = () => {
      modal.classList.add('show', 'fade')
   }

   let closeBtns = document.querySelectorAll('[data-close]')
   closeBtns.forEach((btn) => {
      btn.onclick = () => {
         modal.classList.remove('show', 'fade')
      }
   })
   btn_true.onclick = () => {
      localStorage.clear();
      location.assign('/pages/signin/');
   }
   btn_false.onclick = () => {
      modal.classList.remove('show', 'fade')
   }
}