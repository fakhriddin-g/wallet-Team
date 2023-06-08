let signBtn = document.querySelector('.form-btn')
let logBtn = document.querySelector('.log-in__btn')
let inputs = document.querySelectorAll('input')
let form = document.forms.form

// API Function
let baseURL = "http://localhost:5050"

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
getAllData()

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
    if (patterns[input.name].test(input.value)) {
      input.style.border = '1px solid green'
    } else {
      input.style.border = '1px solid red'
    }
  }

  signBtn.onclick = () => {

    let data = {}

    let fm = new FormData(form)

    fm.forEach((key, value) => {
      data[value] = key
    })

    localStorage.setItem('title-object', JSON.stringify(data))

    if (input.value > 0) {
      location.assign('/pages/login/')
    } else {
      alert('Fill all the gaps')
    }

    createNewTask(data)

  }
})

logBtn.onclick = () => {
  location.assign('/pages/login/')
}

const createNewTask = async (body) => {
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
}