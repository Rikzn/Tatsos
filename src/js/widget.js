// // Клик по "..." в блоке widget
export default function FilterDropdowns() {
    const elements = Array.from(document.querySelectorAll('.card'));

    elements.forEach(element => {
        const btn = element.querySelector('.card-more');

        btn.addEventListener('click', event => {
            event.preventDefault();
            
            if (!element.classList.contains('active')) {
                elements.forEach(element => element.classList.remove('active'))
                element.classList.add('active');
                
            } else {
                elements.forEach(element => element.classList.remove('active'))
                element.classList.remove('active');
            }
        });


        document.addEventListener('click', event => {
            const insideGroup = event.target.matches('.card-more') || event.target.closest('.card-more');
            // const insideButton = event.target.matches('.filters__select-group-btn') || event.target.closest('.filters__select-group-btn');
            if (!insideGroup) {
                elements.forEach(element => element.classList.remove('active'))
            } 
        });
    });
}


// раскрытия виджета

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--active');
        }
    });
});