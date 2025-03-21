const slides = document.querySelectorAll('.slides li');
let slideIndex = 0;

function saveInput() {
    const input = document.getElementById('username');
    sessionStorage.setItem("user", input.value);
    console.log(input.value);
}

function printInput() {
    const storedName = sessionStorage.getItem('user');
    var title = document.getElementById('helloUser');
    if(window.location.pathname === '/pages/main.html') {
        title.innerText += " " + storedName + "!";
    } else {
        console.log(storedName);
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