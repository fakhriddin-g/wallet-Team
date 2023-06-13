import { getData, postData } from "../../modules/http.requests"
import { regexPattern } from "../../modules/regex"

let signBtn = document.querySelector('.form-btn')
let logBtn = document.querySelector('.log-in__btn')
let inputs = document.querySelectorAll('input')
let form = document.forms.form
let emailInput = document.querySelector('.email')


// API Function Fetch
/* let baseURL = "http://localhost:5050"

const getAllData = async () => {
  try {
    let res = await fetch(baseURL + "/users")

    if (res.status === 200 || res.status === 201) {
      let data = await res.json()
      console.log(data);
    }
  } catch (error) {
    alert('Error')
  }
}
getAllData() */

// regexPattern
let patterns = {
  name: /^[a-z ,.'-]+$/i,
  surname: /^[a-z ,.'-]+$/i,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
}

form.onsubmit = (e) => {
  e.preventDefault()

}

inputs.forEach(input => {
  input.onkeyup = () => {
    regexPattern(patterns[input.name], input)
  }

  signBtn.onclick = () => {
    if (input.value.length > 0) {
      save()
    } else {
      alert('Fill all the gaps')
    }
  }
})

logBtn.onclick = () => {
  location.assign('/pages/login/')
}


function save() {

  let data = {}

  let fm = new FormData(form)

  fm.forEach((value, key) => {
    data[key] = value
  })

  
  getData('/users?email=' + data.email)
  .then(res => {
    if (res.data.length !== 0) {
      alert('User already exist')
    } else {
      postData('/users', data)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
              localStorage.setItem('user', JSON.stringify(data))
              location.assign('/pages/login/')
            }
          })
      }
    })
  // createNewTask(data)
}


// API Function Fetch
/* const createNewTask = async (body) => {
  try {
    const res = await fetch(baseURL + "/users", {
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
    alert('Connection error')
  }
} */