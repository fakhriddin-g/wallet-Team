import { getData } from "../../modules/http.requests"

let form = document.forms.form
let logEmail = document.querySelector('.email')
let logPassword = document.querySelector('.password')
let logBtn = document.querySelector('.form-btn')
let signBtn = document.querySelector('.sign-up__btn')
let inputs = document.querySelectorAll('input')

let localData = JSON.parse(localStorage.getItem('user')) || { email: "" }

logEmail.value = localData.email


form.onsubmit = (e) => {
  e.preventDefault()

  let data = {}

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    data[key] = value
  })

  getData('/users?email=' + data.email)
    .then(res => {
      if (res?.data?.length === 0) {
        alert('Urer not found')
      } else {
        if (res?.data[0]?.password === data.password) {
          localStorage.setItem('user', JSON.stringify(res?.data[0]))
          location.assign('/')
        } else {
          alert('Password incorrect')
        }
      }
    })
  // if (logPassword.value === localData.password && logEmail.value === localData.email) {
  //   location.assign('/')
  // } else {
  //   alert('error')
  // }

}

signBtn.onclick = () => {
  location.assign('/pages/signup/')
}