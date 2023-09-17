// about chart
let aboutCircles=Array.from(document.getElementsByClassName('aboutCircles'));
let circleContent=Array.from(document.getElementsByClassName('circleContent'));


aboutCircles.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        circleContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        })
    })
})

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
var gallery = new Swiper(".gallery", {
    loop: true,
    autoplay: true,
    spaceBetween: 40,
    slidesPerView: 1,
    thumbs: {
        swiper: swiper,
    },
});
var smallImgs = new Swiper(".smallImgs", {
    loop: true,
    autoplay: true,
    spaceBetween: 24,
    slidesPerView: 3,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    },
    freeMode: true,
    watchSlidesProgress: true,
});
// gallery Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
