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
// select
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
// gallery Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
