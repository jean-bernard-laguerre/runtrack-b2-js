function myChangeBackgroundColor() {
    let windowWidth = window.innerWidth

    if (windowWidth >= 1337) {
        document.body.style.backgroundColor = "#ffb703"
    } else if (windowWidth >= 505 && windowWidth <= 1336) {
        document.body.style.backgroundColor = "#d90429"
    } else {
        document.body.style.backgroundColor = "#003049"
    }
}

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("resize", myChangeBackgroundColor )
})