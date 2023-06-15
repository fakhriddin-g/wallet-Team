import { v4 as uuidv4 } from 'uuid'
import { user } from "../../modules/user";
import { postData } from '../../modules/http';
import axios from 'axios';
let form = document.forms.addWallet
let dataList = document.querySelector('#currency-list')
let localedSymbols = JSON.parse(localStorage.getItem('symbols')) || null


if(localedSymbols) {
    setOption(localedSymbols)
} else {
    axios.get('https://api.apilayer.com/fixer/symbols', {
        headers: {
            apiKey: import.meta.env.VITE_API_KEY
        }
    })
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
            setOption(res.data.symbols)
        }
    })
}

function setOption(data) {
    for(let key in data) {
        let opt = new Option(data[key], key)

        dataList.append(opt)
    }
}


form.onsubmit = (e) => {
    e.preventDefault();

    let card = {
        id: uuidv4(),
        user_id: user?.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        card[key] = value
    })

    postData('/cards', card)
        .then(res => {
            location.assign('/pages/cards/')
        })
}