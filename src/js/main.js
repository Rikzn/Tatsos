import StickySidebar from 'sticky-sidebar-v2';
import Inputmask from 'inputmask';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import slider from './slider';
import click from './click';
import datefilter from './datefilter';
import tabs from './tabs'; 
import select from './select';
import { async } from 'regenerator-runtime';



document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    click();
    OnlyNumeric();
    // select();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})


// копирование при нажатие
new ClipboardJS('.copy-btn');



// Фиксация сайдбара 

var sidebar = new StickySidebar('#sidebar', {
    containerSelector: '#main-content',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 0,
    bottomSpacing: 0,
    minWidth: 576
});



// Отправка данных у форм
document.addEventListener('DOMContentLoaded', function () {
    // const form = document.getElementById('form');
    // form.addEventListener('submit', formSend);

    // async function formSend(e) {
    //     e.preventDefault();

    //     let error = formValidate(form);
        
    //     let formData = new FormData(form);

    //     if (error === 0) {
    //         form.classList.add('contact-overlay--active');
    //         let response = await fetch('sendmail.php', {
    //             method: 'POST',
    //             body: FormData
    //         });
    //         if (response.ok) {
    //             let result = await response.json();
    //             alert(result.message);
    //             formPreview.innerHTML = '';
    //             form.reset();
    //         }else {
    //             // alert('Ошибка');
    //         }
    //     } else {
            
    //     }
    // }
    
    // function formValidate(form) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const input = formReq[index];
    //         formRemoveError(input);

    //         if (input.classList.contains('_text')){
    //             if (input.value === '') {
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }
    //     }
    //     return error;
    // }
    // function formAddError(input) {
    //     input.parentElement.classList.add('_error');
    //     input.classList.add('_error');
    // }
    // function formRemoveError(input) {
    //     input.parentElement.classList.remove('_error');
    //     input.classList.remove('_error');
    // }
});

// Маска для банковской карточки

let cardInputs = document.querySelectorAll('.js-card-number');
cardInputs.forEach(input => {
    var im = new Inputmask({mask:'9999 9999 9999 9999' });
    im.mask(input);
});

let cardMask = document.querySelectorAll('.js-phone-mask');
cardMask.forEach(input => {
    var im = new Inputmask({mask:'+7 (999) 999 99 99' });
    im.mask(input);
});

