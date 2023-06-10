let card = [
    {
        id: 1,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 2,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
        
    },
    {
        id: 3,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 4,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },{
        id: 5,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 6,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
        
    },
    {
        id: 7,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 8,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },{
        id: 9,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 10,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
        
    },
    {
        id: 11,
        cardId: 1232312,
        type: 'VISA',
        categ: 'Автомобиль',
        money: '414,000,000',
        time: '4 дня назад'
    },
    {
        id: 12,
        cardId: 1232312,
        type: 'VISA',
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


let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let tranzBlock = document.querySelector('.tranz-block')
function reload(arr) {


    for (let item of arr) {
        let tr = document.createElement('tr')
        let idTd = document.createElement('td')
        let visaTd = document.createElement('td')
        let categTd = document.createElement('td')
        let sumTd = document.createElement('td')
        let whenTd = document.createElement('td')

        idTd.innerHTML = item.cardId
        visaTd.innerHTML = item.type
        categTd.innerHTML = item.categ
        sumTd.innerHTML = item.money
        whenTd.innerHTML = item.time


        tBody.append(tr)
        tr.append(idTd, visaTd, categTd, sumTd, whenTd)
    }
}

reload(card)