import StickySidebar from 'sticky-sidebar-v2';
// import StickySidebar from 'sticky-sidebar';
import Inputmask from 'inputmask';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import slider from './slider';
import FilterDropdowns from './FilterDropdowns';
import datefilter from './datefilter';
import tabs from './tabs';
import select from './select';
import clipboard from './clipboard';
import mask from './mask';
import checkbox from './checkbox';
import { async } from 'regenerator-runtime';


document.addEventListener('DOMContentLoaded', function () {
    polyfills();
    detectTouch();
    slider();
    OnlyNumeric();
    FilterDropdowns();
    select();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
});


// Медиа запрос экран меньше 700px скрипт работает
// if (window.matchMedia("(max-width:700px)").matches) {
//     alert('Media Query Matched!')
// }




// Количество выбранных чекбоксов
let checkCount = $('.history-form__group-dropdown-inner').find('input[checkbox]:checked').length;
let chosen = document.querySelector('.history-form__group-chexbox');

chosen.innerHTML = checkCount;
console.log(checkCount);
console.log(chosen);
// let checkText = document.querySelector('.history-form__group-chexbox');




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