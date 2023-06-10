let baseUrl = "http://localhost:5050"

let inpEmail = document.querySelector('.inp-email')
let inpPas = document.querySelector('.inp-pass')
let form = document.forms.log_in

let userData = JSON.parse(localStorage.getItem("user"))

const getUser = () => {
    fetch(baseUrl + "/users")
        .then(res => res.json())
}

inpEmail.value = userData.email


let inps = document.querySelectorAll('input')


inps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})


let patterns = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/
}

function validate(regex, field) {
    if (regex.test(field.value) || field.value.length > 3) {
        field.classList.remove('error')
    } else {
        field.classList.add('error')
    }
}

form.onsubmit = (e) => {
    e.preventDefault();


    if(userData.password == inpPas.value) {
            let user = {
                id: Math.random()
            }
    
            let fm = new FormData(form)
        
            fm.forEach((value, key) => {
                user[key] = value
            })
        
        
            location.assign("/pages/catalog/")
        
            form.reset()
        
        
            console.log(user);
        
    } 

}