let form = document.forms.form
let logEmail = document.querySelector('.email')
let logPassword = document.querySelector('.password')
let logBtn = document.querySelector('.form-btn')
let signBtn = document.querySelector('.sign-up__btn')
let inputs = document.querySelectorAll('input')

let patterns = {
  name: /^[a-z ,.'-]+$/i,
  surname: /^[a-z ,.'-]+$/i,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
}

let localData = JSON.parse(localStorage.getItem('title-object'))

logEmail.value = localData.email

inputs.forEach(input => {
  input.onkeyup = () => {
    if (patterns[input.name].test(input.value)) {
      input.style.border = '1px solid green'
    } else {
      input.style.border = '1px solid red'
    }
  }
})

logBtn.onclick = () => {
  if (logPassword.value === localData.password || logEmail.value === localData.email) {
    alert('Good')
    // location.assign('home.html')
  } else {
    alert('error')
  }
}

form.onsubmit = (e) => {
  e.preventDefault()
}

signBtn.onclick = () => {
  location.assign('../../index.html')
}