import { validate } from "../../modules/regex.js"
let about = document.forms.about
let inp = about.querySelector('input')
let inputs = about.querySelectorAll('input')
let pass = about.querySelector('#pass')
let btn = about.querySelector('button')
let show = about.querySelector('.show')

let localedData = JSON.parse(localStorage.getItem("user"))

inp.value = localedData.email

inputs.forEach(inp => {
    let patterns = {
        email: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        pass: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
    }

    inp.onkeyup = () => {

        if (inp.value === localedData.pass) {
            btn.innerHTML = "Submit"
            inp.classList.remove("error")
            btn.style.backgroundColor = "#0047FF"

        } else {
            inp.classList.add("error")
            btn.innerHTML = "pass is not correct"
            btn.style.backgroundColor = "red"
        }

        validate(patterns[inp.name], inp)
    }

})

about.onsubmit = (e) => {

    e.preventDefault()

    let filled = true

    inputs.forEach(inp => {
        // inp.classList.remove("error")

        if (inp.value.length === 0 || btn.style.backgroundColor === "red") {
            filled = false
            btn.style.backgroundColor = "red"
            inp.classList.add("error")
        }
    })

    if (filled) {
        let user = {}
        let fm = new FormData(about)

        fm.forEach((value, key) => {
            user[key] = value
        })


        location.assign("/pages/catalog/")
        about.reset()


        console.log(user);
    }
}
show.onclick = () => {
    if (pass.type !== "text") {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey.ad68af6.png")`
        pass.type = "text"
    } else {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey-closed.397bfe9.png")`
        pass.type = "password"
    }
}