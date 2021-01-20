import polyfills from './polyfills';
import detectTouch from './detectTouch';
import widget from './widget';
import slider from './slider';
import history from './history';
import datefilter from './datefilter';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    widget();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})


// копирование при нажатие
new ClipboardJS('.copy-btn');
