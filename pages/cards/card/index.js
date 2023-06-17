import { getData } from "../../../modules/http"

const card_id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')

getData('/cards/' + card_id)
    .then(res => {
        h1.innerHTML = res.data.name + " ID PAGE"
    })