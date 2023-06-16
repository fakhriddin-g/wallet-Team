let baseUrl = "http://localhost:5050"
let form = document.forms.form


const getUser = () => {
    fetch(baseUrl + "/users")
        .then(res => res.json())
}

getUser()

let inps = document.querySelectorAll('input')

inps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
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

let count = 1

form.onsubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    inps.forEach(inp => {
        if (inp.value.length < 3) {
            inp.classList.add('error');
            isFormValid = false;
        } else {
            inp.classList.remove('error');
        }
    });

    if (isFormValid) {
        let userInfo = {
            id: count
        }

        let formData = new FormData(form);

        for (let [key, value] of formData.entries()) {
            userInfo[key] = value;
        }

        localStorage.setItem("user", JSON.stringify(userInfo))


        let json = JSON.stringify(userInfo);

        creatUser(json);

        location.assign("/pages/sign-in/")

        form.reset();

        count++
    }
}





const creatUser = async (body) => {
    const res = await fetch(baseUrl + "/users", {
        method: "post",
        body: body,
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (res.status === 201 || res.status === 200) {
        getUser()
    }
}
