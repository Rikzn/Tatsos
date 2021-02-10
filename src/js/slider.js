// слайдер на главной странице
import { Swiper, Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation]);


export default function slider() {

    const sliders = Array.from(document.querySelectorAll('.slider'));

    sliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 30,
            loopedSlides: 5,
            navigation: {
                nextEl: element.querySelector('.slider__next'),
                prevEl: element.querySelector('.slider__prev')
            },
            autoplay: {
                delay: 5000,
            },
        });
    });

} 