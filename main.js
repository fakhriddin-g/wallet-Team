import { reloadHeader } from "./modules/header";
import {getData} from "./modules/http";
import { reload, reloadTable } from "./modules/ui";

let wrapper = document.querySelector('.card-container__wrapper');
let body = document.querySelector('tbody');
let localedUser = JSON.parse(localStorage.getItem('user')) || {}

reloadHeader()

//вызовы
getData('/cards/' + localedUser.id)
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if(res.data.length > 0) {
            reload(res.data.slice(0, 4), wrapper);
         }
      }
   })

getData('/transaction/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if(res.data.length > 0) {
            reloadTable(res.data.slice(0, 5), body);
         }
      }
   })
