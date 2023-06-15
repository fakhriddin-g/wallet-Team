import { v4 as uuidv4 } from 'uuid'
import { user } from '../../modules/user';
import { getData, patchData, postData } from '../../modules/http';

let form = document.forms.add
let select = document.querySelector('select')

function getDate() {
    let d = new Date()
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
}

getData('/cards?user_id=' + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            for(let item of res.data) {
                let opt = new Option(item.name, JSON.stringify(item))

                select.append(opt)
            }
        }
    })


form.onsubmit = (e) => {
    e.preventDefault();
    
    let transaction = {
        id: uuidv4(),
        user_id: user?.id,
        date: getDate()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })
    transaction.card = JSON.parse(transaction.card)
    
    console.log(transaction.amount, +transaction.card.balance);
    if(+transaction.amount <= +transaction.card.balance) {
    
        delete transaction.card.currency
        delete transaction.card.user_id
    
        let {balance} = transaction.card
    
        postData('/transactions', transaction)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    patchData("/cards/" + transaction.card.id, {balance: balance - transaction.amount})
                        .then(res => {
                            if(res.status == 200 || res.status == 201) {
                                location.assign('/pages/transaction/')
                            }
                        })
                }
            })
    } else {
        alert('Not enough money')
    }
}