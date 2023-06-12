import {
    getData,
    postData
} from ".//modules/http"


let loader = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
let form = document.forms.reg
let btn = form.querySelector('button')


form.onsubmit = (e) => {
    e.preventDefault()
    let exist = false

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    btn.innerHTML = loader

    getData('/users?email=' + user.email)
        .then(res => {
            btn.innerHTML = "Submit"
            if (res.data.length !== 0) {
                alert('User is already exist!')
                exist = true
            } else {
                postData("/users", user)
                    .then(res => {
                        btn.innerHTML = "Submit"
                        if (res?.status === 200 || res?.status === 201) {
                            location.assign('/pages/signin/')
                        }
                    })
            }
        })
}