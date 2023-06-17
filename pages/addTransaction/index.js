import { getData, postData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js"
import { v4 as uuidv4 } from 'uuid';
import { user } from "../../modules/user.js";

let addTransaction = document.forms.addTransaction
let inp = addTransaction.querySelector('input')
let inputs = addTransaction.querySelectorAll('input')
let pass = addTransaction.querySelector('#pass')
let btn = addTransaction.querySelector('button')

// let patterns = {
//     name: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     valuta: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
// }





addTransaction.onsubmit = (e) => {

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
        if (filled) {
            let transaction = {
                id: uuidv4(),
                user_id: user?.id,
                card_id: card?.id,
                date: new Date().getDate()
            }
            let fm = new FormData(addTransaction)

            fm.forEach((value, key) => {
                transaction[key] = value
            })

            postData("/transactions", transaction)
                .then(res => {
                    location.assign("/pages/myTransaction/")
                })
        }
    }
}