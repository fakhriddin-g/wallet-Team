export function reload(arr) {
    let body = document.body
    let container = document.createElement('div')
    let h1 = document.createElement('h1')
    let a1 = document.createElement('a')
    let h2 = document.createElement('h2')
    let carts = document.createElement('div')
    let a2 = document.createElement('a')
    let h2_transaktion = document.createElement('h2')
    let all_carts = document.createElement('a')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let th5 = document.createElement('th')
    let tbody = document.createElement('tbody')
    let a3 = document.createElement('a')

    container.classList.add('container')
    carts.classList.add('carts')
    a2.classList.add('a')
    a3.classList.add('a')
    h2.classList.add('padding')

    h1.innerHTML = `Добро пожаловать, Alex Adams!`
    a1.innerHTML = 'alexadams@google.com'
    h2.innerHTML = 'Мои кошельки'
    a2.innerHTML = 'Смотреть все кошельки'
    h2_transaktion.innerHTML = 'Последние транзакции'
    th1.innerHTML = 'ID'
    th2.innerHTML = 'Отправлено с кошелька'
    th3.innerHTML = 'Категория'
    th4.innerHTML = 'Сумма транзации'
    th5.innerHTML = 'Когда'
    a3.innerHTML = 'Смотреть все оплаты'
    all_carts.innerHTML = 'Смотреть все кошельки'

    all_carts.setAttribute('href', "");

    all_carts.style.fontSize = '28px'
    h2_transaktion.style.padding = '20px 0px'

    for (let item of arr) {
        let hr = document.createElement('hr')
        let tbody_tr = document.createElement('tr')
        let tbody_th1 = document.createElement('th')
        let tbody_th2 = document.createElement('th')
        let tbody_th3 = document.createElement('th')
        let tbody_th4 = document.createElement('th')
        let tbody_th5 = document.createElement('th')
        let cart_h1 = document.createElement('h1')
        let cart_h2 = document.createElement('h2')
        let cart = document.createElement('div')

        cart.classList.add('cart')
        cart.style.background = item.color

        cart_h1.innerHTML = item.name
        cart_h2.innerHTML = item.money
        tbody_th1.innerHTML = item.id
        tbody_th2.innerHTML = item.name
        tbody_th3.innerHTML = item.category
        tbody_th4.innerHTML = item.buying
        tbody_th5.innerHTML = item.date

        tbody_tr.append(tbody_th1, tbody_th2, tbody_th3, tbody_th4, tbody_th5)
        cart.append(cart_h1, cart_h2)
        carts.append(cart)
        tbody.append(tbody_tr)
    }

    place.append(container)
    container.append(h1, a2, h2, carts, all_carts, h2_transaktion, table, a3)
    table.append(thead, tbody)
    thead.append(tr)
    tr.append(th1, th2, th3, th4, th5)
    body.append(place)
}