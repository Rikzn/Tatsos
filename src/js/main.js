import StickySidebar from 'sticky-sidebar-v2';
// import StickySidebar from 'sticky-sidebar';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import FilterDropdowns from './FilterDropdowns';
import datefilter from './datefilter';
import tabs from './tabs';
import select from './select';
import clipboard from './clipboard';
import maskInput from './mask';
import sticky from './sticky';
import checkBox from './checkbox';
import slider from './slider';
import { async } from 'regenerator-runtime';
import select2 from 'select2';




document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    OnlyNumeric();
    FilterDropdowns();
    select();
    sticky();
    maskInput();
    slider();
    checkBox();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)

});


  //Паралакс эффект для картинки в сайдбаре
  const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.utils.toArray(".parallax").forEach(layer => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth)
      tl.to(layer, {y: movement, top: -30, ease: "none"}, 0)
    });


  //Анимация появления контента в декстопе
  
  
  if (window.matchMedia('(max-width:700px)').matches) {
    // let content = gsap.timeline();
    // gsap.to('.content', {duration: 2, y: -80});
    // content.from('.sidebar', {opacity: 0, duration: 0.5})
  } else {
    let content = gsap.timeline();
    content.from('.sidebar__content', {opacity: 0, x: -950, duration: 1.5})
    .from('.content', {opacity: 0, x: 250,  ease: "slow(0.7, 0.7, false)",  duration: 1.0})
    .from('.menu__inner', {opacity: 0, x: 250,  ease: "slow(0.7, 0.7, false)", duration: 1.0}, "-=1.0");
  }

  // скролл якоря 
  $(".menu-box").on("click", "a", function(event) {
    event.preventDefault();
    var anchorId  = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top - $(".menu-box").height();
    $("html, body").animate({scrollTop: scrollingDistance}, 800);
});

