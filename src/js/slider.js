// слайдер на главной странице

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    loopedSlides: 5,
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
  });