// select
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
// 
const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
const input2 = document.querySelector("#phone2");
window.intlTelInput(input2, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
// swiper
var swiper = new Swiper(".projects", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 29,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
      pagination: {
        el: ".swiper-pagination",
      },
});
// gallery Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});