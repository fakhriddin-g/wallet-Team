import {
    getData,
    postData
} from "../../modules/http.requsets"

let loader = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
let form = document.forms.login
let btn = form.querySelector('button')

console.log(form);

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    btn.innerHTML = loader

    getData('/users?email=' + user.email)
        .then(res => {
            btn.innerHTML = "Submit"
            if (res?.data?.length === 0) {
                alert('User not found!')

            } else {
                if(res?.data[0]?.password === user?.password) {
                    localStorage.setItem('user', JSON.stringify(res?.data[0]))

                    location.assign('/')
                } else {
                    alert('Wrong password')
                }
            }
        })
}