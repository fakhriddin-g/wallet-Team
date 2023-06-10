import { reloadTable } from "../../main";
import { reloadHeader } from "../../modules/header";
import { getData } from "../../modules/http";
let userData = JSON.parse(localStorage.getItem('user'));
let body = document.querySelector('tbody');


getData('/transacshen/')
   .then(res => {
      if (res.status == 200 || res.status === 201) {
         if (body !== null) reloadTable(res.data, body);
      }
   })