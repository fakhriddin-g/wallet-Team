import { v4 as uuidv4 } from 'uuid';
import { getData, postData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js"
import { user } from "../../modules/user.js"
import axios from 'axios';

let addWallet = document.forms.addWallet
let inputs = addWallet.querySelectorAll('input')
let btn = addWallet.querySelector('button')

let dataList = document.querySelector('#valuta-list')

let localedSymbols = JSON.parse(localStorage.getItem("symbols")) || null

// let patterns = {
//     name: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     valuta: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
// }

// inputs.forEach(inp => {
//     inp.onkeyup = () => validate(patterns[inp.name], inp)
// })

if (localedSymbols) {

    axios.get(import.meta.env.VITE_CURRENCY_API, {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY
        }
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem("symbols", JSON.stringify(res.data.symbols))
                setOption(res.data.symbols)
            }
        })

}

function setOption(data) {

    for (let key in data) {
        let opt = new Option(data[key], key)
        dataList.append(opt)
    }

}


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

    }
}
