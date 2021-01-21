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

