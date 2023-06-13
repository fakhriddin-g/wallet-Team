import { header } from "../../modules/header"
import { reloadWallet } from "../../modules/reload"
import { getData } from "../../modules/http.requests"
import { user } from "../../modules/user"

export let modal = document.querySelector(".modal")
export let modal_bg = document.querySelector(".modal_bg")
let close = document.querySelectorAll(".close")
let sign_out = document.querySelector(".modal button")
let email = document.querySelector("#email")
let myWallets = document.querySelector(".myWallets")
let addWallet = document.querySelector("#addWallet")
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

addWallet.onclick = () => {
    location.assign("/pages/addWallet/")
}

header()
getData("/cards?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reloadWallet(res.data.slice(0, 4), myWallets)
        }
    })

email.innerHTML = user.email