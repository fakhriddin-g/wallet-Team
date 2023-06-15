export function reloadWallet(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let card = document.createElement("div")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        card.classList.add("card")
        h3.innerHTML = item.name
        p.innerHTML = item.valuta

        card.style.background = "red"
        //  `linear-gradient(84.37deg, ${item.color[0]} 2.27%, ${item.color[1]} 92.26%`

        card.append(h3, p)
        place.append(card)
    };
}

export function reloadTransactions(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        let title = document.createElement("td")
        let category = document.createElement("td")
        let amount = document.createElement("td")
        let date = document.createElement("td")

        id.innerHTML = (Math.random() + 9999).toFixed(8).slice(5, 10)
        title.innerHTML = item.title
        category.innerHTML = item.category
        amount.innerHTML = item.amount.toLocaleString("UZ-uz")
        date.innerHTML = item.date

        tr.append(id, title, category, amount, date)
        place.append(tr)
    }
}
export function reloadCurrency(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let option = document.createElement("option")

        // card.classList.add("card")
        option.innerHTML = item

        place.append(option)
    };
}