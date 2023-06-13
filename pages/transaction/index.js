import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
import { reloadTable } from "../../modules/ui";

let userData = JSON.parse(localStorage.getItem('user'));
let body = document.querySelector('tbody');

reloadHeader()

getData('/transaction/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (body !== null) reloadTable(res.data, body);
      }
   })
let btn = document.querySelector('.trs')
btn.onclick = () => {
   location.assign('/pages/addTransaction/')
}