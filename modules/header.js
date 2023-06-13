import { modal, modal_bg } from "../main"
import { user } from "./user"

export function header() {
    let body = document.body
    // let localedData = JSON.parse(localStorage.getItem("user"))

    let header = document.createElement("header")
    let nav = document.createElement("nav")
    let links = document.createElement("div")
    let hide = document.createElement("button")
    let obj = {
        'Главная': "/",
        'Мои кошельки': "/pages/myWallet/",
        'Мои транзакции': "/pages/myTransaction/"
    }
    for (let title of ['Главная', 'Мои кошельки', 'Мои транзакции']) {
        let a = document.createElement("a")
        a.innerHTML = title
        a.href = obj[a.innerHTML]
        links.append(a)
    }
    let logOut = document.createElement("button")
    let span = document.createElement("span")
    let img = document.createElement("img")

    hide.classList.add("hide")
    nav.classList.add("container")
    links.classList.add("links")
    logOut.classList.add("log_out")

    span.innerHTML = user.email || "email"
    img.src = "/public/out.png"
    img.alt = "out"
    hide.innerHTML = "X"

    header.append(nav, hide)
    nav.append(links, logOut)
    logOut.append(span, img)
    body.append(header)

    logOut.onclick = () => {
        modal.style.display = "flex"
        modal_bg.style.display = "block"
        setTimeout(() => {
            modal.style.scale = "1"
            modal.style.opacity = "1"
            modal_bg.style.opacity = "1"
        }, 300);
    }
    hide.onclick = () => {
        if (hide.innerHTML === "X") {
            header.style.top = "-11%"
            hide.innerHTML = "Show links"
        } else {
            header.style.top = "0%"
            hide.innerHTML = "X"
        }
    }

}
