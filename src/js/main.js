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





// Валидатор
let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
		}
	});
}

validateForms('.js-form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');



// Маска для банковской карточки

let cardInputs = document.querySelectorAll('.js-card-number');
cardInputs.forEach(input => {
    var im = new Inputmask({mask:'9999 9999 9999 9999', placeholder: "0000 0000 0000 0000" });
    im.mask(input);
});

let cardMask = document.querySelectorAll('.js-phone-mask');
cardMask.forEach(input => {
    var im = new Inputmask({mask:'+7 (999) 999 99 99', placeholder: "+7 (000) 000 00 00" });
    im.mask(input);
});


// Скрыть или показать CVC2
let svg = document.querySelectorAll('.CVC');

svg.forEach(element => {
    let InputCVC = document.querySelector('.svgBtn');

    InputCVC.addEventListener('click', event => {
        event.preventDefault();
        
        if (!element.classList.contains('type=[number]')) {
            svg.forEach(element => element.classList.remove('active'))
            element.classList.add('active'); 
        } else {
            svg.forEach(element => element.classList.remove('active'))
            element.classList.remove('active');
        }
    });
});


// Чекбокс на странице создание шаблонов

// const chexbox = document.querySelectorAll('.templates-create-new-form__checkbox');

//     chexbox.forEach(function (chexbox) {
//             chexbox.addEventListener('click', function(e) {
//                 if (e.target.classList.contains('checkbox-input')) {
//                     e.target.classList.toggle('history-form__btn--active');
//                 }
//             });
//         });

// console.log('chexbox');