
window.onscroll = function () {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        document.querySelector(".navbar").classList.add("sticky");
    } else {
        document.querySelector(".navbar").classList.remove("sticky");
    }
}

function BookConfirmation() {
    alert("Du har bokat bord.")
}

function MenuMessage() {
    alert("Den här menyn är inte tillgänglig för tillfället.")
}

const menuButtons = document.querySelectorAll(".button-wrap")

menuButtons.forEach(button => {
    button.addEventListener('click', MenuMessage)
})

function toggleHidden(orgClass, newClass) {
    document.querySelectorAll(orgClass).forEach(link => { link.classList.toggle(newClass) })

}

function hideNavbar() {
    if (window.innerWidth < 900) {
        document.querySelectorAll(".link").forEach(link => { link.classList.add("hidden") })

    } else {
        document.querySelectorAll(".link").forEach(link => { link.classList.remove("hidden") })
    }
}

window.onload = () => { hideNavbar() }
window.onresize = () => { hideNavbar() }

let hamburgerButton = document.getElementById("hamburger")

hamburgerButton.addEventListener("click", () => {
    toggleHidden(".hamburger-nav", "hidden")
    document.querySelector(".navbar").classList.toggle("menu-active")
})

