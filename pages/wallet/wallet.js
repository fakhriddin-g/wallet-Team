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
    },
    {
        id: 5,
        cardId: 1232312,
        color: '84.37deg, #5F0A87 2.27%, #A4508B 92.26%',
        type: 'VISA',
        sum: 'SUM',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
        
    },
    {
        id: 6,
        cardId: 1232312,
        color: '84.37deg, #20BF55 2.27%, #01BAEF 92.26%',
        type: 'VISA',
        sum: 'DOLLAR',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 7,
        cardId: 1232312,
        color: '84.37deg, #380036 2.27%, #0CBABA 92.26%',
        type: 'VISA',
        sum: 'MONETA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    }
]


let userData = JSON.parse(localStorage.getItem("user"))
let headerTwo = document.querySelector('.header-2')

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

let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let cardBlock = document.querySelector('.card-block')
function reload(arr) {


    for (let item of arr) {
        let card = document.createElement('div')
        let h3Card = document.createElement('h3')
        let pCard = document.createElement('p')

        h3Card.innerHTML = item.type
        pCard.innerHTML = item.sum

        card.style.background = "linear-gradient(" + item.color + ')'
        card.classList.add('card')

        cardBlock.append(card)
        card.append(h3Card, pCard)
    }
}

reload(card)