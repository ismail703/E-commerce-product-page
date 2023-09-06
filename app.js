// ************** Header **************
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const navbar = document.querySelector("nav");
const cartIcon = document.querySelector(".cart-icon");
const cartContent = document.querySelector(".cart-content");
const overlay = document.querySelector(".overlay");

// open navbar
menu.addEventListener("click", function() {
    navbar.classList.add("show-navbar");
    overlay.style.display = "block";
});

// close navbar
closeBtn.addEventListener("click", function () {
    navbar.classList.remove("show-navbar");
    overlay.style.display = "none";
});

// show cart
cartIcon.addEventListener('click', function () {
    cartContent.classList.toggle("show-cart");
});

// ************** Product images **************
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
});

// ************** buy **************
let value = 0;

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const addChart = document.querySelector(".add-chart");
const myValue = document.querySelector(".num");
const box = document.querySelector(".box");
const checkoutBtn = document.querySelector(".checkout-btn");


// select product number
add.addEventListener('click', () => {
    value++;
    myValue.textContent = `${value}`;
});

minus.addEventListener('click', () => {
    (value === 0) ? value = 0 : value--;
    myValue.textContent = `${value}`;
});

// Modify price 
const oldPriceElement = document.querySelector(".old-price");
const newPriceElement = document.querySelector(".new-price");
const discountElement = document.querySelector(".discount");

let oldPrice = 250;
let discount = 50;
let newPrice = oldPrice - (oldPrice * discount) / 100

oldPriceElement.innerHTML = `$${oldPrice.toFixed(2)}`;
newPriceElement.innerHTML = `$${newPrice.toFixed(2)}`;
discountElement.innerHTML =`${discount}%`;

// add to cart
addChart.addEventListener('click', () => {
    cartContent.classList.add("show-cart");

    if (value > 0) {
        checkoutBtn.classList.add("show-btn");

        let result = `
        <div class="cart-product">
        <img
          class="product-img"
          src="images/image-product-1-thumbnail.jpg"
          alt=""
        />
        <div class="info">
          <p>fall limited edition sneakers</p>
          <p>
            <span class="price">$${newPrice.toFixed(2)}</span>
            <span class="num">× ${value} </span>
            <span class="total-price"> $${(newPrice*value).toFixed(2)}</span>
          </p>
        </div>
        <img
          class="delete-icon"
          src="images/icon-delete.svg"
          alt="Delete icon"
        />
      </div>`;
      box.innerHTML = result;
      
      // remove product from cart
      const del = document.querySelector(".delete-icon");

      del.addEventListener('click', function () {
        box.innerHTML = `<p class="empty">Your carte is empty</p>`;
        checkoutBtn.classList.remove("show-btn");
      });
    }
})


// ************** Functions **************
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