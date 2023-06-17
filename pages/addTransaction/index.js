import { getData, patchData, postData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js"
import { v4 as uuidv4 } from 'uuid';
import { user } from "../../modules/user.js";

let addTransaction = document.forms.addTransaction
let inp = addTransaction.querySelector('input')
let inputs = addTransaction.querySelectorAll('input')
let pass = addTransaction.querySelector('#pass')
let btn = addTransaction.querySelector('button')
let cardList = addTransaction.querySelector("select")
// let patterns = {
//     name: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     valuta: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
// }
function getDate() {
    let d = new Date()
    return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + "-" + d.getHours() + ":" + d.getMinutes()
}
getData("/cards?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            for (let item of res.data) {
                let opt = new Option(item.name, JSON.stringify(item))
                cardList.append(opt)
            }
        }
    })
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
                date: getDate()
            }
            let fm = new FormData(addTransaction)

            fm.forEach((value, key) => {
                transaction[key] = value
            })
            transaction.name = JSON.parse(transaction.name)

            if (transaction.sum <= +transaction.name.balance) {
                delete transaction.name.valuta
                delete transaction.name.user_id

                let { balance } = transaction.name

                postData("/transactions", transaction)
                    .then(res => {
                        if (res.status === 200 || res.status === 201) {
                            patchData("/cards/" + transaction.name.id, { balance: balance - transaction.sum })
                                .then(res => {
                                    if (res.status === 200 || res.status === 201) {
                                        location.assign("/pages/myTransaction/")
                                    }
                                })
                        }
                    })

            } else {
                alert("Not enough money")
            }
        }
    }
}