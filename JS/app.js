// Cuando haga click en "fas fab-bar" se abre "menu.display"

const fas = document.querySelector(".fab")

fas.addEventListener ("click",function() {
    fas.classList.add("menu.display")
})