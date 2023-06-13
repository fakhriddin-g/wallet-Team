import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
import { reloadTable } from "../../modules/ui";

let userData = JSON.parse(localStorage.getItem('user'));
let body = document.querySelector('tbody');
let btn = document.querySelector('.transaction__button');
reloadHeader()

getData('/transaction/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (body !== null) reloadTable(res.data, body);
      }
   })


btn.onclick = () => {
   location.assign('/pages/addTransaction/')
}