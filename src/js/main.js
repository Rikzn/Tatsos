import StickySidebar from 'sticky-sidebar-v2';
// import StickySidebar from 'sticky-sidebar';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import slider from './slider';
import FilterDropdowns from './FilterDropdowns';
import datefilter from './datefilter';
import tabs from './tabs';
import select from './select';
import clipboard from './clipboard';
import maskInput from './mask';
import sticky from './sticky';
import checkBox from './checkbox';
import { async } from 'regenerator-runtime';


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




// Параллакс эффект 
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
    tl.to(layer, {y: movement, top: -15, ease: "none"}, 0)
  });


// Валидатор
// let validateForms = function(selector, rules, successModal) {
//     new window.JustValidate(selector, {
//         rules: rules,
//         submitHandler: function(form) {
//             let formData = new FormData(form);

//             let xhr = new XMLHttpRequest();

//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === 4) {
//                     if (xhr.status === 200) {
//                         console.log('Отправлено');
//                     }
//                 }
//             }

//             xhr.open('POST', 'mail.php', true);
//             xhr.send(formData);

//             form.reset();
//         }
//     });
// }

// validateForms('.js-form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup');