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
// gallery Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
