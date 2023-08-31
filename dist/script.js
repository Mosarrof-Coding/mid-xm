// nav togglar--------
let montilucast = document.querySelector('.montilucast');
let mobileBtn = document.querySelector('.mobileBtn');

mobileBtn.addEventListener('click', ()=>{
  montilucast.classList.toggle('mbBlock');
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn2",
    prevEl: ".btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});