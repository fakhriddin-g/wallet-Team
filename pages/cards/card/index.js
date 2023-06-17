import axios from "axios"
import { getData } from "../../../modules/http"

const card_id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')
let result = document.querySelector('.result')
let button = document.querySelector('button')
let b = 0

getData('/cards/' + card_id)
    .then(res => {
      let balance = res.data.balance
      h1.innerHTML = res.data.name + " ID PAGE"
      h3.innerHTML = res.data.balance

      axios.get("https://api.apilayer.com/fixer/convert?to=UZS&from=USD&amount=" + balance, {
        headers: {
          apiKey: "mOfozzGHAtF6BPhLvfn93kGRRzUmTlSD"
        }
      })
      .then(res => {
        button.onclick = () => {
          result.innerHTML = res.data.result
        }
      })

    })

