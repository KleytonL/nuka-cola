const slides = document.querySelectorAll('.slides li');
let slideIndex = 0;

function saveInput() {
    const inputName = document.getElementById('username');
    const inputVault = document.getElementById('vaultnumber');
    sessionStorage.setItem("user", inputName.value);
    sessionStorage.setItem("vault", inputVault.value);
    console.log(inputName.value);
    console.log(inputVault.value);
}

function printInput() {
    const storedName = sessionStorage.getItem('user');
    const storedVault = sessionStorage.getItem('vault');
    var title = document.getElementById('helloUser');
    if(window.location.pathname === '/pages/main.html') {
        title.innerText += " " + storedName + "!";
    } else {
        console.log(storedName);
        console.log(storedVault);
    }
}

window.onload = printInput();

document.addEventListener("DOMContentLoaded", initSlide);

function initSlide() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide() {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    initSlide();
}

function nextSlide() {
    slideIndex++;

    if(slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlide();
}

function prevSlide() {
    slideIndex--;

    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    showSlide(slideIndex);
}