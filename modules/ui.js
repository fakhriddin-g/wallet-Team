import { getData } from './http';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export function reload(arr, place) {
    place.innerHTML = '';

    for (let item of arr) {

        let card = document.createElement('div')
        let h3Card = document.createElement('h3')
        let pCard = document.createElement('p')

        h3Card.innerHTML = item.name
        pCard.innerHTML = item.valuta

            const color1 = item.colorLeft;
            const color2 = item.colorRight;
            card.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
            
        card.classList.add('card')

        place.append(card)
        card.append(h3Card, pCard)
    }
}



export function reloadTranz(res, body) {
    body.innerHTML = ''
    for (let item of res) {
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

        body.append(tr)
        tr.append(idTd, visaTd, categTd, sumTd, whenTd)
    }
}