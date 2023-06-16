let localedUser = JSON.parse(localStorage.getItem("user"))


if(!localedUser) {
    location.assign('/pages/sign-up/')
}