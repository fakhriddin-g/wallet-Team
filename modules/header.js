let userData = JSON.parse(localStorage.getItem("user"))
let headerTwo = document.querySelector('.header-2')
export function header() {
    let pMainPage = document.createElement('p')
    let leftHeader = document.createElement('div')
    let rightHeader = document.createElement('div')
    let pRightHeader = document.createElement('p')
    let imgRightHeader = document.createElement('img')
    let pWalletPage = document.createElement('p')
    let pTranzPage = document.createElement('p')
    let walletP = document.createElement('p')

    walletP.innerHTML = 'Мои кошельки'
    pRightHeader.innerHTML = userData.email
    imgRightHeader.src = '../icon/log-out.svg'
    pMainPage.innerHTML =  'Главная'
    pTranzPage.innerHTML = 'Мои транзакции'
    pWalletPage.innerHTML = 'Мои кошельки'

    leftHeader.classList.add('left-header')
    rightHeader.classList.add('right-header')

    headerTwo.append(leftHeader, rightHeader)
    rightHeader.append(pRightHeader, imgRightHeader)
    leftHeader.append(pMainPage, pTranzPage, pWalletPage)


    imgRightHeader.onclick = () => {
        let con = confirm('sure?')

        if(con == true) {
            location.assign("/pages/sign-in/")
        }
    }


    pWalletPage.onclick = () => {
        location.assign('/pages/wallet/')
    }

    pMainPage.onclick = () => {
        location.assign('/')
    }

    pTranzPage.onclick = () => {
        location.assign('/pages/transactions/')
    }
}

header()