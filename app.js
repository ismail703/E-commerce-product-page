const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const navbar = document.querySelector("nav");
const cartIcon = document.querySelector(".cart-icon");
const cartContent = document.querySelector(".cart-content");
const overlay = document.querySelector(".overlay");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideImg = document.querySelectorAll(".slider-image img");

slideImg.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
});

menu.addEventListener("click", function() {
    navbar.classList.add("show-navbar");
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    navbar.classList.remove("show-navbar");
    overlay.style.display = "none";
});

cartIcon.addEventListener('click', function () {
    cartContent.classList.toggle("show-cart");
});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {
    if (counter === slideImg.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slideImg.length - 1;
    }
    slideImg.forEach((img) => {
        img.style.transform = `translateX(-${counter * 100}%)`;
    });
}



console.log(slideImg);