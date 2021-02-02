import StickySidebar from 'sticky-sidebar-v2';
import Inputmask from 'inputmask';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import slider from './slider';
import FilterDropdowns from './FilterDropdowns';
import datefilter from './datefilter';
import tabs from './tabs'; 
import select from './select';
import { async } from 'regenerator-runtime';



document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    slider();
    OnlyNumeric();
    FilterDropdowns();
    // select();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
});


// копирование при нажатие
var clipboard = new ClipboardJS('.copy-btn');



// Фиксация сайдбара 

var sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 0,
    bottomSpacing: 0,
    minWidth: 576
});


// Маска для банковской карточки

let cardInputs = document.querySelectorAll('.js-card-number');
Array.from(cardInputs).forEach(input => {
    var im = new Inputmask({mask:'9999 9999 9999 9999', placeholder: "0000 0000 0000 0000" });
    im.mask(input);
});

let cardMask = document.querySelectorAll('.js-phone-mask');
cardMask.forEach(input => {
    var im = new Inputmask({mask:'+7 (999) 999 99 99', placeholder: "+7 (000) 000 00 00" });
    im.mask(input);
});


// Чекбокс на странице создание шаблонов

const chexbox = document.querySelectorAll('.templates-create-new-form__checkbox');
const checkboxDropdown = document.querySelector('.checkbox__dropdown');
    chexbox.forEach(function (chexbox) {
            chexbox.addEventListener('click', function(e) {
                if (e.target.classList.contains('checkbox-input')) {
                    e.target.classList.toggle('history-form__btn--active');
                    checkboxDropdown.classList.toggle('checkbox__dropdown--active');
                }
            });
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