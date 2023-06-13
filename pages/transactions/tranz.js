
import { getData } from '../../modules/http';

getData("/transactions")
    .then(res => reload(res.data))

let headerTwo = document.querySelector('.header-2')
let tBody = document.querySelector('.tBody')
let userData = JSON.parse(localStorage.getItem("user"))

console.log(userData);


function header() {
    let pHeaderWords = ['Главная']
    let leftHeader = document.createElement('div')
    let rightHeader = document.createElement('div')
    let pRightHeader = document.createElement('p')
    let imgRightHeader = document.createElement('img')
    let pWords
    let walletP = document.createElement('p')
    walletP.innerHTML = 'Мои кошельки'
    for (let index = 1; index <= pHeaderWords.length; index++) {
        pWords = document.createElement('p')
        pWords.innerHTML = pHeaderWords[index - 1]
        leftHeader.append(pWords, walletP)
    }

    pRightHeader.innerHTML = userData.email
    imgRightHeader.src = '../icon/log-out.svg'

    leftHeader.classList.add('left-header')
    rightHeader.classList.add('right-header')

    headerTwo.append(leftHeader, rightHeader)
    rightHeader.append(pRightHeader, imgRightHeader)


    imgRightHeader.onclick = () => {
        let con = confirm('sure?')

        if(con == true) {
            location.assign("/pages/about/")
        }
    }


    walletP.onclick = () => {
        location.assign('/pages/wallet/')
    }

    pWords.onclick = () => {
        location.assign('/')
    }

}
header()


let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let tranzBlock = document.querySelector('.tranz-block')
function reload(data) {


    for (let item of data) {
        let tr = document.createElement('tr')
        let idTd = document.createElement('td')
        let visaTd = document.createElement('td')
        let categTd = document.createElement('td')
        let sumTd = document.createElement('td')
        let whenTd = document.createElement('td')

        idTd.innerHTML = item.card_id
        visaTd.innerHTML = item.from
        categTd.innerHTML = item.categ
        sumTd.innerHTML = item.valuta
        whenTd.innerHTML = new Date().getHours() + ':' + new Date().getMinutes()


        tBody.append(tr)
        tr.append(idTd, visaTd, categTd, sumTd, whenTd)
    }
}


let btnAdd = document.querySelector('.btn-add')

btnAdd.onclick = () => {
    location.assign('/pages/addTranz/')
}