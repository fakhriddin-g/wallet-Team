import { v4 as uuidv4 } from 'uuid';
import { getData, postData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js"
import { user } from "../../modules/user.js"
import axios from 'axios';
import { reloadCurrency } from '../../modules/reload.js';
let addWallet = document.forms.addWallet
let inputs = addWallet.querySelectorAll('input')
let btn = addWallet.querySelector('button')

let currency = document.querySelector('#currency')
// let patterns = {
//     name: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     valuta: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
// }

// inputs.forEach(inp => {
//     inp.onkeyup = () => validate(patterns[inp.name], inp)
// })

axios.get(import.meta.env.VITE_CURRENCY_API, {
    headers: {
        apiKey: import.meta.env.VITE_API_KEY
    }
})
    .then(res => reloadCurrency(Object.keys(res.data.symbols), currency))

addWallet.onsubmit = (e) => {

    e.preventDefault()

    let filled = true

    inputs.forEach(inp => {
        inp.classList.remove("error")

        if (inp.value.length === 0) {
            filled = false
            btn.innerHTML = "Fill the fill"
            btn.style.backgroundColor = "red"
            inp.classList.add("error")
        }
    })

    if (filled) {
        let card = {
            id: uuidv4(),
            user_id: user?.id
        }
        let fm = new FormData(addWallet)

        fm.forEach((value, key) => {
            card[key] = value
        })

        location.assign("/pages/myWallet/")
        postData("/cards", card)
            .then(res => console.log(res))

        localStorage.setItem("card", JSON.stringify(card))
    }
}
