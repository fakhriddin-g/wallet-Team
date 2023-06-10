let card = [
    {
        id: 1,
        cardId: 1232312,
        color: '84.37deg, #D7816A 2.27%, #BD4F6C 92.26%',
        type: 'VISA',
        sum: 'RUB',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 2,
        cardId: 1232312,
        color: '84.37deg, #5F0A87 2.27%, #A4508B 92.26%',
        type: 'VISA',
        sum: 'SUM',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
        
    },
    {
        id: 3,
        cardId: 1232312,
        color: '84.37deg, #20BF55 2.27%, #01BAEF 92.26%',
        type: 'VISA',
        sum: 'DOLLAR',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 4,
        cardId: 1232312,
        color: '84.37deg, #380036 2.27%, #0CBABA 92.26%',
        type: 'VISA',
        sum: 'MONETA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    }
]

let headerTwo = document.querySelector('.header-2')
let tBody = document.querySelector('.tBody')
let userData = JSON.parse(localStorage.getItem("user"))

console.log(userData);


function header() {
    let pHeaderWords = ['Главная', 'Мои кошельки', 'Мои транзакции']
    let leftHeader = document.createElement('div')
    let rightHeader = document.createElement('div')
    let pRightHeader = document.createElement('p')
    let imgRightHeader = document.createElement('img')
    let pWords
    for (let index = 1; index <= pHeaderWords.length; index++) {
        pWords = document.createElement('p')
        pWords.innerHTML = pHeaderWords[index - 1]
        leftHeader.append(pWords)
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
}
header()

let cardBlock = document.querySelector('.card-block')
function reload(arr) {


    for (let item of arr) {
        let card = document.createElement('div')
        let h3Card = document.createElement('h3')
        let pCard = document.createElement('p')
        let tr = document.createElement('tr')
        let idTd = document.createElement('td')
        let visaTd = document.createElement('td')
        let categTd = document.createElement('td')
        let sumTd = document.createElement('td')
        let whenTd = document.createElement('td')

        h3Card.innerHTML = item.type
        pCard.innerHTML = item.sum
        idTd.innerHTML = item.cardId
        visaTd.innerHTML = item.type
        categTd.innerHTML = item.categ
        sumTd.innerHTML = item.money
        whenTd.innerHTML = item.time

        card.style.background = "linear-gradient(" + item.color + ')'
        card.classList.add('card')

        cardBlock.append(card)
        card.append(h3Card, pCard)
        tBody.append(tr)
        tr.append(idTd, visaTd, categTd, sumTd, whenTd)
    }
}

reload(card)

let nameSpan = document.querySelector('#name')
let gmailText = document.querySelector('.gmail-a')
let allWall = document.querySelector('.all-wall')
let allTranz = document.querySelector('.all-tranz')

nameSpan.innerHTML = `${userData.name} ${userData.surname}`
gmailText.innerHTML = userData.email


allWall.onclick = () => {
    location.assign('/pages/wallet/')
}

allTranz.onclick = () => {
    location.assign('/pages/transactions/')
}