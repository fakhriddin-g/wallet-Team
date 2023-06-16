import { header } from './modules/header'
import { reload, reloadTranz } from "./modules/ui";
let tBody = document.querySelector('.tBody')
let cardBlock = document.querySelector('.card-block')
let userData = JSON.parse(localStorage.getItem("user")) || {}
import { getData } from './modules/http';
let nullCard = document.querySelector('.null-card')
let cen = document.querySelector('.center')

getData('/cards/?user_id=' + localedUser.id)
.then(res => {
   if(res.data.length > 0) {
      nullCard.style.display = 'none'
      cardBlock.classList.add('anime')
   } else {
      nullCard.style.display = 'flex'
      cardBlock.classList.remove('anime')
   }
})

getData('/transactions/?user_id=' + localedUser.id)
.then(res => {
   if(res.data.length > 0) {
       cen.style.display = 'none'
   } else {
      cen.style.display = 'block'
   }
})

    getData('/cards/?user_id=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reload(res.data.slice(0, 4), cardBlock);
         }
      }
   })

getData('/transactions/?user_id=' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (res.data.length > 0) {
            reloadTranz(res.data.slice(0, 5), tBody);
         }
      }
   })

    






let nameSpan = document.querySelector('#name')
let gmailText = document.querySelector('.gmail-a')
let allWall = document.querySelector('.all-wall')
let allTranz = document.querySelector('.all-tranz')

nameSpan.innerHTML = `${userData.name} ${userData.surname}`
gmailText.innerHTML = userData.email


allWall.onclick = () => {
    location.assign('/pages/wallet/')
}

allTranz.onclick = () => {
    location.assign('/pages/transactions/')
}