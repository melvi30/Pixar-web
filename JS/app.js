// Cuando hago click en "fas fab-bar" añado ver a "menu"

const fas = document.querySelector(".fas")
const menu = document.querySelector(".menu")

fas.addEventListener("click",function() {
    menu.classList.toggle("ver")
})