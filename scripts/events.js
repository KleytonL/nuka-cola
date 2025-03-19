const slides = document.querySelectorAll('.slides img');
let imgIndex = 0;

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
        slides[imgIndex].classList.add("displaySlide");
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    initSlide();
}

function nextSlide() {
    imgIndex++;

    if(imgIndex >= slides.length) {
        imgIndex = 0;
    }

    showSlide(imgIndex);
}

function prevSlide() {
    imgIndex--;

    if(imgIndex < 0) {
        imgIndex = slides.length - 1;
    }
    
    showSlide(imgIndex);
}