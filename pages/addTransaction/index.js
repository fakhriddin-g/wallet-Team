import { getData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js"
import { v4 as uuidv4 } from 'uuid';
import { user } from "../../modules/user.js";

let about = document.forms.addWallet
let inp = about.querySelector('input')
let inputs = about.querySelectorAll('input')
let pass = about.querySelector('#pass')
let btn = about.querySelector('button')

// let patterns = {
//     name: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     valuta: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
// }





about.onsubmit = (e) => {

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
                user_id: user?.id
            }
            let fm = new FormData(about)

            fm.forEach((value, key) => {
                transaction[key] = value
            })
            location.assign("/pages/myTransaction/")

            postData("/transactions/", transaction)
                .then(res => console.log(res))


        }
    }
}