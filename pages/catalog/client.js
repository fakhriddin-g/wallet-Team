import { header } from "../../modules/header.js";

let localedData = JSON.parse(localStorage.getItem("valid"))
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let myWallets = document.querySelector(".myWallets")
let tbody = document.querySelector("tbody")


let allWallets = document.querySelector("#allWallets")
let allPay = document.querySelector("#allPay")


const wallets = [
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#D7816A",
            "#BD4F6C"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#5F0A87",
            "#A4508B"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#20BF55",
            "#01BAEF"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#380036",
            "#0CBABA"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#5F0A87",
            "#A4508B"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#D7816A",
            "#BD4F6C"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#380036",
            "#0CBABA"]
    },
    {
        title: "Visa",
        valuta: "RUB",
        color: ["#20BF55",
            "#01BAEF"]
    },



]
const transactions = [
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    },
    {
        id: 1232312,
        title: "VISA",
        category: "Автомобиль",
        amount: 414000000,
        date: "4 дня назад"
    }
]

header()

reloadWallet(wallets.slice(0, 4))

reloadTransactions(transactions.slice(0, 7))

allWallets.onclick = () => {

    if (allWallets.innerHTML.includes("все")) {
        reloadWallet(wallets)
        allWallets.innerHTML = "Смотреть первые четыре"
    } else {
        allWallets.innerHTML = "Смотреть все кошельки"
        reloadWallet(wallets.slice(0, 4))
    }

}

allPay.onclick = () => {

    if (allPay.innerHTML.includes("все")) {
        reloadTransactions(transactions)
        allPay.innerHTML = "Смотреть первые семь"
    } else {
        allPay.innerHTML = "Смотреть все оплаты"
        reloadTransactions(transactions.slice(0, 7))
    }

}

name.innerHTML = localedData.name
email.innerHTML = localedData.email


function reloadWallet(arr) {
    myWallets.innerHTML = ""

    for (let item of arr) {
        let card = document.createElement("div")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        card.classList.add("card")
        h3.innerHTML = item.title
        p.innerHTML = item.valuta

        card.style.background = `linear-gradient(84.37deg, ${item.color[0]} 2.27%, ${item.color[1]} 92.26%`

        card.append(h3, p)
        myWallets.append(card)
    };
}
function reloadTransactions(arr) {
    tbody.innerHTML = ""

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
        tbody.append(tr)
    }
}
