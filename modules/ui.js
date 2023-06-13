let localData = JSON.parse(localStorage.getItem('user'))

let wellcomText = {
  0: 'Добро пожаловать',
  1: 'Мои кошельки',
  2: 'Мои транзакции'
}

let tableHeaders = ['ID', 'Отправлено с кошелька', 'Категория ', 'Сумма транзации', 'Когда']


export function reloadWallet(arr, place) {
  place.innerHTML = ""

  for (const wallet of arr) {
    let walletBox = document.createElement('div')
    let walletName = document.createElement('span')
    let walletCuurency = document.createElement('span')

    walletBox.classList.add('wallet-box')
    walletName.classList.add('wallet-name')
    walletCuurency.classList.add('wallet-currency')

    walletBox.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
    walletName.innerHTML = wallet.name
    walletCuurency.innerHTML = wallet.currency

    walletBox.append(walletName, walletCuurency)
    place.append(walletBox)
  }

}

export function reloadTransaction(arr, place) {
  place.innerHTML =""

  let transactionTable = document.createElement('table')
  let tableHeader = document.createElement('thead')
  let tableHeaderRow = document.createElement('tr')
  for (const head of tableHeaders) {
    let tableHead = document.createElement('th')

    tableHead.innerHTML = head

    tableHeaderRow.append(tableHead)
  }
  let tableBody = document.createElement('tbody')
  for (const body of arr) {
    let tableBodyRow = document.createElement('tr')
    let id = document.createElement('td')
    let wallet = document.createElement('td')
    let category = document.createElement('td')
    let transaction = document.createElement('td')
    let time = document.createElement('td')

    id.innerHTML = body.id
    wallet.innerHTML = body.wallet
    category.innerHTML = body.category
    transaction.innerHTML = body.money
    time.innerHTML = body.date

    tableBodyRow.append(id, wallet, category, transaction, time)
    tableBody.append(tableBodyRow)
  }

  tableHeader.append(tableHeaderRow)
  transactionTable.append(tableHeader, tableBody)
  place.append(transactionTable)
}
