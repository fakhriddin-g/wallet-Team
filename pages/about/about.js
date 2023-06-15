import { getData } from "../../modules/http.requests.js"
import { validate } from "../../modules/regex.js";

let about = document.forms.about
let inp = about.querySelector('input')
let inputs = about.querySelectorAll('input')
let pass = about.querySelector('#pass')
let btn = about.querySelector('button')
let show = about.querySelector('.show')

let localedData = JSON.parse(localStorage.getItem("user"))

let loader = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'


inputs.forEach(inp => {
    let patterns = {
        email: /^[a-zA-Z0-9._ %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        pass: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/,
    }

    inp.onkeyup = () => validate(patterns[inp.name], inp)

})

inp.value = localedData?.email || null

// pass.onkeyup = () => validate(patterns[inp.name], inp)

about.onsubmit = (e) => {

    e.preventDefault()

    let filled = true

    inputs.forEach(inp => {
        inp.classList.remove("error")

        if (inp.value.length === 0) {
            filled = false
            btn.innerHTML = "Fill the fill"
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

        btn.innerHTML = loader
        getData("/users?email=" + user.email)
            .then(res => {
                if (res?.data?.length === 0) {
                    btn.innerHTML = "User not found"
                    btn.style.backgroundColor = "red"
                }
                else {
                    if (res?.data[0]?.pass === user?.pass) {
                        localStorage.setItem("user", JSON.stringify(res?.data[0]))

                        location.assign("/")
                        about.reset()
                        console.log(user);
                        btn.innerHTML = "Submit"
                        btn.style.backgroundColor = "#0047FF"
                    } else {
                        pass.classList.add("error")
                        btn.innerHTML = "Password is not correct"
                        btn.style.backgroundColor = "red"
                    }
                }
            })
    }
}
show.onclick = () => {
    if (pass.type !== "text") {

        show.style.backgroundImage = `url("https://em-content.zobj.net/thumbs/120/apple/354/monkey-face_1f435.png")`
        show.style.width = "100px"
        pass.type = "text"

    } else {

        show.style.backgroundImage = `url("https://em-content.zobj.net/thumbs/120/apple/354/see-no-evil-monkey_1f648.png")`
        pass.type = "password"
        show.style.width = "30px"

    }
}
