const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function phase1(F) {
    celsius = (F - 32) * (9/5);
    return celsius;   
}

// function phase2 (time) {
    if (time =++ 12) {
        return "MIDDAY";
    }
    elseif (time < 12) {
        return "GOOD MORNING!!!";
    }
    else {
        return "GOOD AFTERNOON";
    }
   
