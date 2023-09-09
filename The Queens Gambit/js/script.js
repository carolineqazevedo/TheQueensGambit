var swiper = new Swiper(".swiper" ,{
  cssMode: true,
  spaceBetween: 0,
  slidesPerView: 4.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
})