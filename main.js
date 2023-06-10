let header = document.querySelector('.header')
let welcome = document.querySelector('.welcome')
let wallet = document.querySelector('.wallet')
let transaction = document.querySelector('.transaction')

// Get Local Storage
let localData = JSON.parse(localStorage.getItem('user'))

// Arrays
let wallets = ['1', '2', 'dfg', 'dgd', 5]
let navItems = ['Главная', 'Мои кошельки', 'Мои транзакции']
let tableHeaders = ['ID', 'Отправлено с кошелька', 'Категория ', 'Сумма транзации', 'Когда']
let tableBodies = [
  {
    id: '123123',
    wallet: 'VISA',
    category: 'auto',
    transaction: '414,000',
    time: "4 дня назад"
  },
  {
    id: '123123',
    wallet: 'VISA',
    category: 'auto',
    transaction: '414,000',
    time: "4 дня назад"
  },
  {
    id: '123123',
    wallet: 'VISA',
    category: 'auto',
    transaction: '414,000',
    time: "4 дня назад"
  },
]

// Function
function reloadHeader() {
  let container = document.createElement('div')
  let navbar = document.createElement('nav')
  let navList = document.createElement('ul')
  for (const item of navItems) {
    let navItem = document.createElement('li')

    navItem.classList.add('nav-item')
    navItem.innerHTML = item

    navList.append(navItem)
  }
  let profile = document.createElement('div')
  let profileEmail = document.createElement('div')
  let profileImg = document.createElement('img')

  container.classList.add('container')
  navbar.classList.add('navbar')
  navList.classList.add('nav-list')
  profile.classList.add('profile')
  profileEmail.classList.add('profile-email')
  profileImg.classList.add('profile-img')

  profileEmail.innerHTML = localData.email
  profileImg.src = '/public/icons/log-out.svg'

  profile.append(profileEmail, profileImg)
  navbar.append(navList, profile)
  container.append(navbar)
  header.append(container)

  profileImg.onclick = () => {
    location.assign('/pages/login/')
  }
}
reloadHeader()

function reloadWelcomeBox() {
  let container = document.createElement('div')
  let welcomeBox = document.createElement('div')
  let welcomeTitle = document.createElement('h1')
  let welcomeName = document.createElement('span')
  let welcomeEmail = document.createElement('span')

  container.classList.add('container')
  welcomeBox.classList.add('welcome-box')
  welcomeTitle.classList.add('welcom-title')
  welcomeName.classList.add('welcom-name')
  welcomeEmail.classList.add('welcom-email')

  welcomeTitle.innerHTML = 'Добро пожаловать, '
  welcomeName.innerHTML = localData?.name + ' ' + localData?.surname
  welcomeEmail.innerHTML = localData?.email

  welcomeTitle.append(welcomeName)
  welcomeBox.append(welcomeTitle, welcomeEmail)
  container.append(welcomeBox)
  welcome.append(container)
}
reloadWelcomeBox()

function reloadWallet() {
  let container = document.createElement('div')
  let walletContent = document.createElement('div')
  let myWallet = document.createElement('h2')
  let allWallet = document.createElement('div')
  for (const wallet of wallets) {
    let walletBox = document.createElement('div')
    let walletName = document.createElement('span')
    let walletCuurency = document.createElement('span')

    walletBox.classList.add('wallet-box')
    walletName.classList.add('wallet-name')
    walletCuurency.classList.add('wallet-currency')

    walletBox.style.background = '#' + Math.floor(Math.random()*16777215).toString(16)
    walletName.innerHTML = 'VISA'
    walletCuurency.innerHTML = 'RUB'

    walletBox.append(walletName, walletCuurency)
    allWallet.append(walletBox)
  }
  let showAllWallet = document.createElement('p')

  container.classList.add('container')
  walletContent.classList.add('wallet-content')
  myWallet.classList.add('my-wallet')
  allWallet.classList.add('all-wallets')
  showAllWallet.classList.add('show-all-wallet', 'show')

  myWallet.innerHTML = 'Мои кошельки'
  showAllWallet.innerHTML = 'Смотреть все кошельки'

  walletContent.append(myWallet, allWallet, showAllWallet)
  container.append(walletContent)
  wallet.append(container)
}
reloadWallet()

function reloadTransaction() {
  let container = document.createElement('div')
  let transactionContent = document.createElement('div')
  let transactionTitle = document.createElement('h2')
  let transactionTable = document.createElement('table')
  let tableHeader = document.createElement('thead')
  let tableHeaderRow = document.createElement('tr')
  for (const head of tableHeaders) {
    let tableHead = document.createElement('th')

    tableHead.innerHTML = head

    tableHeaderRow.append(tableHead)
  }
  let tableBody = document.createElement('tbody')
  for (const body of tableBodies) {
    let tableBodyRow = document.createElement('tr')
    let id = document.createElement('td')
    let wallet = document.createElement('td')
    let category = document.createElement('td')
    let transaction = document.createElement('td')
    let time = document.createElement('td')

    id.innerHTML = body.id
    wallet.innerHTML = body.wallet
    category.innerHTML = body.category
    transaction.innerHTML = body.transaction
    time.innerHTML = body.time

    tableBodyRow.append(id, wallet, category, transaction, time)
    tableBody.append(tableBodyRow)
  }
  let allTransaction = document.createElement('p')

  container.classList.add('container')
  transactionContent.classList.add('transaction-content')
  transactionTitle.classList.add('transaction-title')
  allTransaction.classList.add('all-transaction', 'show')

  transactionTitle.innerHTML = 'Последние транзакции'
  allTransaction.innerHTML = 'Смотреть все оплаты'

  tableHeader.append(tableHeaderRow)
  transactionTable.append(tableHeader, tableBody)
  transactionContent.append(transactionTitle, transactionTable, allTransaction)
  container.append(transactionContent)
  transaction.append(container)
}
reloadTransaction()