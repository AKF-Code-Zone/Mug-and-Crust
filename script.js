document.addEventListener("DOMContentLoaded", () => {
  const logoText = document.querySelector('.logo-text');

  if (logoText) {
    logoText.addEventListener('click', () => {
      logoText.style.textShadow = '0 0 20px var(--secondary-color), 0 0 30px white';

      setTimeout(() => {
        logoText.style.textShadow = '';
      }, 400); // reset after 0.4s
    });
  }
});

// custom script

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  //spaceBetween: 25,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  0: {
    slidesPerView: 1
},
768: {
    slidesPerView: 2
},
1024: {
    slidesPerView: 3
},
}
});
