import { getData } from "../../modules/http.requests"
import { user } from "../../modules/user"
import { header } from "../../modules/header"
import { reloadTransactions } from "../../modules/reload"

let email = document.querySelector("#email")
let tbody = document.querySelector("tbody")
let addTransaction = document.querySelector("#addTransactions")

header()

email.innerHTML = user.email


getData('/transactions?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadTransactions(res.data, tbody)
        }
    })

addTransaction.onclick = () => {
    location.assign("/pages/addTransaction/")
}





