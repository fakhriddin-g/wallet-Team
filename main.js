import { header } from "./modules/header"
import { transactions, wallets } from "./modules/ui"
import { reloadTransactions, reloadWallet } from "./modules/reload"
import { getData } from "./modules/http.requests"
import { user } from "./modules/user"

let localedData = JSON.parse(localStorage.getItem("user"))
let name = document.querySelector("#name")
export let modal = document.querySelector(".modal")
export let modal_bg = document.querySelector(".modal_bg")
let close = document.querySelectorAll(".close")
let sign_out = document.querySelector(".modal button")
let email = document.querySelector("#email")
let myWallets = document.querySelector(".myWallets")
let tbody = document.querySelector("tbody")

// name.innerHTML = user.name
// email.innerHTML = user.email

sign_out.onclick = () => {
    location.assign("/pages/about/")
    localStorage.removeItem("user")
}

close.forEach(btn => {
    btn.onclick = () => {
        modal.style.opacity = "0"
        modal_bg.style.opacity = "0"
        modal.style.scale = "0"
        setTimeout(() => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
        }, 300);
    }
})
let allWallets = document.querySelector("#allWallets")
let allPay = document.querySelector("#allPay")

header()

getData("/cards?user_id=" + localedData.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadWallet(res.data.slice(0, 4), myWallets)
        }
    })

getData("/transactions?user_id=" + localedData.id)
    .then(res => {
        console.log(res);
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





