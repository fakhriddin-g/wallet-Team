import { header } from "./modules/header"
import { reloadEmptyTransactions, reloadEmptyWallet, reloadTransactions, reloadWallet } from "./modules/reload"
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
            if (res.data.length) {
                reloadWallet(res.data.slice(0, 4), myWallets)
            } else {
                reloadEmptyWallet(myWallets)
            }
        }
    })

getData("/transactions?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            if (res.data.length) {
            reloadTransactions(res.data.slice(0, 7), tbody)   
            }
            else{
                reloadEmptyTransactions(tbody)   
            }
        }
    })




allWallets.onclick = () => {
    location.assign("/pages/myWallet/")
}




allPay.onclick = () => {
    location.assign("/pages/myTransaction/")
}






