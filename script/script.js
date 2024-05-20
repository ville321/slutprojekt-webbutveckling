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