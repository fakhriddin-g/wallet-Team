export function headerReload() {
    let body = document.body
    let header = document.createElement('header')
    let left = document.createElement('div')
    let left_p1 = document.createElement('p')
    let left_p2 = document.createElement('p')
    let left_p3 = document.createElement('p')
    let right = document.createElement('div')
    let right_p1 = document.createElement('p')
    let right_img = document.createElement('img')
    let exit = document.createElement('div')
    let h1 = document.createElement('h1')
    let vibor = document.createElement('div')
    let firstBtn = document.createElement('button')
    let twoBtn = document.createElement('button')

    left.classList.add('left')
    right.classList.add('right')
    exit.classList.add('exit')
    vibor.classList.add('vibor')

    left_p1.innerHTML = 'Главная'
    left_p2.innerHTML = 'Мои кошельки'
    left_p3.innerHTML = 'Мои транзакции'
    right_p1.innerHTML = 'alexadams@google.com'
    h1.innerHTML = 'Вы точно хотите выйти?'
    firstBtn.innerHTML = 'Да'
    twoBtn.innerHTML = 'Нет'

    right_img.onclick = () => {
        exit.style.display = 'block'
    }

    left_p1.onclick = () => {
        location.assign('/')
    }

    left_p2.onclick = () => {
        location.assign('/pages/wallets/')
    }

    firstBtn.onclick = () => {
        localStorage.clear()
    }

    twoBtn.onclick = () => {
        exit.style.display = 'none'
    }

    left_p3.onclick = () => {
        location.assign('/pages/transactions')
    }

    right_img.src = '/images/exit.svg'

    left.append(left_p1, left_p2, left_p3)
    right.append(right_p1, right_img)
    header.append(left, right, exit)
    exit.append(h1, vibor)
    vibor.append(firstBtn, twoBtn)
    body.prepend(header)
}