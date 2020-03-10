window.onload = pageLoad;
function pageLoad() {
    toggleFunction();
}
function toggleFunction() {
    let btnHamburger = document.getElementById('hamburger');
    let containerHamburger = document.getElementsByClassName('hamburger-toggle');
    let navbarInside = document.getElementsByClassName('navbar-inside');
    let navbarBox = document.getElementsByClassName('navbar-box');
    btnHamburger.onclick = function(){
        containerHamburger[0].classList.toggle("change");
        navbarInside[0].classList.toggle("navbar-inside-open");
        navbarBox[0].classList.toggle("navbar-box-open");
    }
}