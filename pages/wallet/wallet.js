
import { getData } from '../../modules/http';
getData("/cards")
    .then(res => reload(res.data))

let userData = JSON.parse(localStorage.getItem("user"))
let headerTwo = document.querySelector('.header-2')

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function header() {
    let pHeaderWords = ['Главная']
    let leftHeader = document.createElement('div')
    let rightHeader = document.createElement('div')
    let pRightHeader = document.createElement('p')
    let imgRightHeader = document.createElement('img')
    let pWords
    let tranzP = document.createElement('p')
    tranzP.innerHTML = 'Мои транзакции'
    for (let index = 1; index <= pHeaderWords.length; index++) {
        pWords = document.createElement('p')
        pWords.innerHTML = pHeaderWords[index - 1]
        leftHeader.append(pWords, tranzP)
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

    tranzP.onclick = () => {
        location.assign('/pages/transactions/')
    }

    pWords.onclick = () => {
        location.assign('/')
    }
}
header()

let gmailText = document.querySelector('.gmail-a')

gmailText.innerHTML = userData.email

let cardBlock = document.querySelector('.card-block')
function reload(arr) {


    for (let item of arr) {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
          const color1 = getRandomColor();
          const color2 = getRandomColor();
          card.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
        });
        
        let card = document.createElement('div')
        let h3Card = document.createElement('h3')
        let pCard = document.createElement('p')

        h3Card.innerHTML = item.name
        pCard.innerHTML = item.value

        
        card.classList.add('card')

        cardBlock.append(card)
        card.append(h3Card, pCard)
    }
}



let btnAdd = document.querySelector('.btn-add')

btnAdd.onclick = () => {
    location.assign('/pages/addWallet/')
}