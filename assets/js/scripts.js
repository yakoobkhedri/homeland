// about chart
let aboutCircles = Array.from(document.getElementsByClassName('aboutCircles'));
let circleContent = Array.from(document.getElementsByClassName('circleContent'));


aboutCircles.forEach((tab) => {
    tab.addEventListener('click', function () {
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
var projects = new Swiper(".projects", {
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
// swiper
var blog = new Swiper(".blog", {
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
});
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// pannel


// open sidebar

let openSidebar=document.getElementById('openSidebar');
let sidebar=document.getElementById('sidebar');
let overlay=document.getElementById('overlay');

openSidebar.addEventListener('click',function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
})
overlay.addEventListener('click',function () {
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
})