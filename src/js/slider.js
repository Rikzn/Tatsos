// слайдер на главной странице
import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);


export default function Slider() {

    const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    loopedSlides: 5,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
    }
    });
  
} 