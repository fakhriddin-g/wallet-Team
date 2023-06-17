import { header } from "../../modules/header"
import { reloadEmptyWallet, reloadWallet } from "../../modules/reload"
import { getData } from "../../modules/http.requests"
import { user } from "../../modules/user"

let email = document.querySelector("#email")
let myWallets = document.querySelector(".myWallets")
let addWallet = document.querySelector("#addWallet")

email.innerHTML = user.email

header()


addWallet.onclick = () => {
    location.assign("/pages/addWallet/")
}


getData("/cards?user_id=" + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            if (res.data.length) {
                reloadWallet(res.data, myWallets)
            } else {
                addWallet.remove()
                reloadEmptyWallet(myWallets)
            }
        }
    })
