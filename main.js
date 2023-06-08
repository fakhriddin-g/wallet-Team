import { validate } from "./modules/regex.js";
let reg = document.forms.reg
let inputs = reg.querySelectorAll('input')
let btn = reg.querySelector('button')
let show = reg.querySelector('.show')
let pass = reg.querySelector('#pass')

let base_url = "http://localhost5050"
const getAllData = async () => {
    try {
        const res = await fetch(base_url + "/users")
        if (res.status === 200 || res.status === 201) {
            const data = await res.json()
            reload(data, tbody)
        }
    } catch (e) {
        alert("error " + e)
    }
}

getAllData()


inputs.forEach(inp => {
    let patterns = {
        name: /^[a-z а-я ,.'-]+$/i,
        surname: /^[a-z а-я ,.'-]+$/i,
        email: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        pass: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
    }

    inp.onkeyup = () => validate(patterns[inp.name], inp)

})

reg.onsubmit = (e) => {

    e.preventDefault()

    let filled = true

    inputs.forEach(inp => {
        // inp.classList.remove("error")

        if (inp.value.length === 0 || inp.classList.contains("error")) {
            filled = false
            btn.style.backgroundColor = "red"
            inp.classList.add("error")
        }
    })

    if (filled) {
        let user = {}
        let fm = new FormData(reg)

        fm.forEach((value, key) => {
            user[key] = value
        })

        localStorage.setItem("valid", JSON.stringify(user))

        location.assign("pages/about/")
        createNewStudent(user)
        console.log(user);
        reg.reset()
    }
}
show.onclick = () => {
    if (pass.type !== "text") {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey.ad68af6.png")`
        show.style.width = "100px"
        pass.type = "text"
    } else {
        show.style.backgroundImage = `url("https://go.wepro.uz/_nuxt/img/monkey-closed.397bfe9.png")`
        pass.type = "password"
        show.style.width = "30px"
    }
}

const createNewStudent = async (body) => {
    try {
        const res = await fetch(base_url + "/users", {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (res.status === 200 || res.status === 201) {
            getAllData()
        }
    } catch (e) {
        alert("error" + e)
    }
}
