(function () {
    'use strict';
    AOS.init({
        startEvent: `load`,
        offset: 20,
        once: true,
    });

    var camera = new Swiper (`.first-slider`, {
        speed: 600,
        spaceBetween: 12,
        navigation:{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        }
    });
    var photos = GLightbox({
        selector: `#photos .photo`
    });
    var comment = new Swiper(`#comments .swiper`,{
        pagination:{
            el: `.swiper-pagination`,
            clickable: true,
            type: `bullets`,
        }
    });
})();

window.addEventListener("scroll",() =>{
    let scroll = window.scrollY;
    const navBar = document.querySelector(".header-Navbar")
    if(scroll > 100){
        navBar.setAttribute("style", "background-color: #393839;")
    }else{
        navBar.setAttribute("style", "background-color: #000000;")
    }
})
console.log(window.scrollY)

const macBtn = document.querySelector("#mac-btn")
const watchBtn = document.querySelector("#watch-btn")
const airpodsBtn = document.querySelector("#airpods-btn")
let ecoİmage =document.querySelector("#eco-image")

macBtn.addEventListener("click", () => {
    ecoİmage.setAttribute("src", "images/ecosystem/iphone-mac.jpg")
})
watchBtn.addEventListener("click", () => {
    ecoİmage.setAttribute("src", "images/ecosystem/iphone-watch.jpg")
})
airpodsBtn.addEventListener("click", () => {
    ecoİmage.setAttribute("src", "images/ecosystem/iphone-airpods.jpg")
})