import StickySidebar from 'sticky-sidebar-v2';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import slider from './slider';
import click from './click';
import datefilter from './datefilter';
import tabs from './tabs'; 



document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    click();
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


let inputChexbox = document.querySelector('.history-form__group-chexbox');

let checkboxItem = document.querySelector('.card-checkbox-input');
console.log(inputChexbox);
console.log(checkboxItem);

function showChexbox() {
    console.log("Привет")
};
showChexbox()
// document.querySelectorAll('input[type="checkbox"]:checked').length
