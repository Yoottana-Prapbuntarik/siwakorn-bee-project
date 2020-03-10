
window.onload = pageLoad;
function pageLoad(){
    toggleFunction();

    // var forms = document.getElementById("myForm");
    // forms.onsubmit = validateForm;
}

function validateForm() {
    var xz = document.forms["myForm"]["firstname"];
    if (xz == ""){
        alert("กรุณาใส่ชื่อ");
        return false;
    }

    var x = document.forms["myForm"]["password"];
    var y = document.forms["myForm"]["retypepassword"];
    if (x.value == y.value){
        alert("ลงทะเบียนสำเร็จ");
    }

    else{
        var error = document.getElementById("errormsg")
        error.innerHTML = "Error Password"
        return false;
    }
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