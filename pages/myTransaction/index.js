import { reloadTransactions } from "../../modules/reload"
import { getData } from "../../modules/http.requests"
import { card, user } from "../../modules/user"
import { header } from "../../modules/header"
export let modal = document.querySelector(".modal")
export let modal_bg = document.querySelector(".modal_bg")
let close = document.querySelectorAll(".close")
let sign_out = document.querySelector(".modal button")
let email = document.querySelector("#email")
let tbody = document.querySelector("tbody")
let addTransaction = document.querySelector("#addTransactions")

header()

email.innerHTML = user.email

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


getData('/transactions?card_id=' + card.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadTransactions(res.data, tbody)
        }
    })

addTransaction.onclick = () => {
    location.assign("/pages/addTransaction/")
}





