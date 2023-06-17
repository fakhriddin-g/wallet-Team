import { header } from "./modules/header"
import { reloadTransactions, reloadWallet } from "./modules/reload"
import { getData } from "./modules/http.requests"
import { user } from "./modules/user"

let name = document.querySelector("#name")

let email = document.querySelector("#email")
let myWallets = document.querySelector(".myWallets")
let tbody = document.querySelector("tbody")

name.innerHTML = user.name
email.innerHTML = user.email

let allWallets = document.querySelector("#allWallets")
let allPay = document.querySelector("#allPay")

header()

getData("/cards?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadWallet(res.data.slice(0, 4), myWallets)
        }
    })

getData("/transactions?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadTransactions(res.data.slice(0, 7), tbody)
        }
    })


if (allWallets !== null) {

    allWallets.onclick = () => {
        location.assign("/pages/myWallet/")
    }
}

if (allWallets !== null) {

    allPay.onclick = () => {
        location.assign("/pages/myTransaction/")
    }
}





