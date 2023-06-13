import { getData, postData } from "/modules/http.requests.js";
import { validate } from "/modules/regex.js";
let reg = document.forms.reg
let inputs = reg.querySelectorAll('input')
let btn = reg.querySelector('button')
let show = reg.querySelector('.show')
let pass = reg.querySelector('#pass')
let loader = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

let base_url = "http://localhost:5050"

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

        btn.innerHTML = loader
        getData("/users?email=" + user.email)
            .then(res => {
                if (res.data.length !== 0) {
                    btn.innerHTML = "Account is already exist"
                    btn.style.backgroundColor = "red"
                    // modal.style.opacity = "1"
                    // modal.style.scale = "1"
                    // setTimeout(() => {
                        //     modal.style.display = "block"
                        // }, 300);
                    }
                    else {
                        postData("/users", user)
                        .then(res => {
                            btn.innerHTML = "Submit"
                            btn.style.backgroundColor = "#0047FF"
                            if (res?.status === 200 || res?.status === 201) {

                                location.assign("/pages/about/")

                                localStorage.setItem("user", JSON.stringify(user))

                                reg.reset()
                                console.log(user);

                            }
                        })
                }

            })
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
