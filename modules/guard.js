let localedUser = JSON.parse(localStorage.getItem("user"))

if (!localedUser) {
    location.assign("/pades/about/")
}