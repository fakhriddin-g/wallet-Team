export function reload(arr, place) {
    let doc = document
    place.innerHTML = '';
    for (let card of arr) {
        let div = doc.createElement('div');
        let title = doc.createElement('div');
        let lang = doc.createElement('div');
        //class
        div.classList.add('item');
        title.classList.add('item__title');
        lang.classList.add('item__lang');
        //inner
        title.innerHTML = card.name;
        lang.innerHTML = card.currency;
        div.style.background = "red"
        //append
        div.append(title, lang);
        place.append(div);
    }
}
export function reloadTable(res, body) {
    let doc = document;
    body.innerHTML = ''
    let n = 1;
    for (let data of res) {
        let tr = doc.createElement('tr');
        for (let i = 0; i < 5; i++) {
            let td = doc.createElement('td');
            if (i === 0) {
                td.innerText = n;
            } else if (i === 1) {
                td.innerText = data.fromWallet;
            } else if (i === 2) {
                td.innerText = data.categories;
            } else if (i === 3) {
                td.innerText = data.price;
            } else if (i === 4) {
                td.innerText = data.time;
            }
            tr.append(td);
        }
        body.append(tr);
        n++;
    }
}
