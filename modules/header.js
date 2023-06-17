import { user } from "./user"

export function header() {
    let body = document.body
    let modal = document.querySelector(".modal")
    let modal_bg = document.querySelector(".modal_bg")

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
            header.style.top = "-70px"
            hide.innerHTML = "Show links"
        } else {
            header.style.top = "0%"
            hide.innerHTML = "X"
        }
    }

    let close = document.querySelectorAll(".close")
    let sign_out = document.querySelector(".modal button")
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

}
