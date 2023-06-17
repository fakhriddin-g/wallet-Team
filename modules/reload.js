function getRandomColors() {
    function getRGB() {
        function randomaizer() {
            return Math.floor(Math.random() * 255)
        }

        let r = randomaizer()
        let g = randomaizer()
        let b = randomaizer()
        return `${r},${g},${b}`
    }
    function randomaizerDeg() {
        return Math.floor(Math.random() * 255)
    }
    let d = randomaizerDeg()
    return `linear-gradient(${d}deg, rgba(${getRGB()},1), rgba(${getRGB()},1))`
}

export function reloadWallet(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let card = document.createElement("div")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        card.classList.add("card")
        h3.innerHTML = item.name
        p.innerHTML = item.valuta

        card.style.background = getRandomColors()

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
        title.innerHTML = item.name
        category.innerHTML = item.category
        amount.innerHTML = item.sum.toLocaleString("uz-UZ")
        date.innerHTML = item.date

        tr.append(id, title, category, amount, date)
        place.append(tr)
    }
}


