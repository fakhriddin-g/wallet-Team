import { v4 as uuidv4 } from 'uuid'
import { user } from "../../modules/user";
import { postData } from '../../modules/http';

let form = document.forms.addWallet
let select = document.querySelector('datalist')


getSymbols()
    .then(res => {
        for(let key in res) {
            let opt = new Option(key, key)
            select.append(opt)
        }
    })





form.onsubmit = (e) => {
    e.preventDefault();


    let card = {
        id: uuidv4(),
        user_id: user?.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        card[key] = value
    })

    postData('/cards', card)
        .then(res => console.log(res))
}