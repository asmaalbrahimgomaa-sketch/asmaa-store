var swiperMain = new Swiper(".slide_swp", {
  loop: true,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

var swiperProducts = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1200: {
        slidesPerView: 5,
        spaceBetween: 20
    },
    1000: {
        slidesPerView: 4,
        spaceBetween: 20
    },
    700: {
        slidesPerView: 3,
        spaceBetween: 15
    },
    0: {
        slidesPerView: 2,
        spaceBetween: 10
    }
}

});
const categoryBtn = document.querySelector(".category_btn");

const categoryNavList = document.querySelector(".category_nav_list");

categoryBtn.onclick = () => {

    categoryNavList.classList.toggle("active");

};