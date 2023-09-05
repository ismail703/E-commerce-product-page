// ************** Header **************
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const navbar = document.querySelector("nav");
const cartIcon = document.querySelector(".cart-icon");
const cartContent = document.querySelector(".cart-content");
const overlay = document.querySelector(".overlay");

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

// ************** Product image **************
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideImg = document.querySelectorAll(".slider-image img");
const mainImg = document.querySelector(".main");
const secondaryImgs = document.querySelectorAll(".secondary");


slideImg.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
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

secondaryImgs.forEach((img, index)=> {
    img.addEventListener('click', (e) => {
        secondaryImgs.forEach(img => {
            img.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        mainImg.src = `images/image-product-${index+1}.jpg`;
    });
})
// ************** Functions **************
function carousel() {
    // back to default image
    // mainImg.src = `images/image-product-1.jpg`;

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