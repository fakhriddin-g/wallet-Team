let navItems = {
  0: 'Главная',
  1: 'Мои кошельки',
  2: 'Мои транзакции'
}

let navItemLinks = {
  0: '/',
  1: '/pages/wallet/',
  2: '/pages/transaction/'
}

let localData = JSON.parse(localStorage.getItem('user'))

export function reloadHeader() {
  let header = document.querySelector('.header')
  let container = document.createElement('div')
  let navbar = document.createElement('nav')
  let navList = document.createElement('ul')
  for (const item of [0,1,2]) {
    let navItem = document.createElement('li')
    let navItemLink = document.createElement('a')

    navItem.classList.add('nav-item')
    navItemLink.innerHTML = navItems[item]
    navItemLink.href = navItemLinks[item]

    navItem.append(navItemLink)
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
    localStorage.removeItem('user')
    location.assign('/pages/login/')
  }
}