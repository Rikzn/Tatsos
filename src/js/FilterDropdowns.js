     // Клик по "..." в блоке widget 

export default function FilterDropdowns() {
    const elements = Array.from(document.querySelectorAll('.js-filters-dropdown'));

    elements.forEach(element => {
        const btn = element.querySelector('.filters__select-group-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();
            
            if (!element.classList.contains('active')) {
                const close = document.querySelector('.history-form-setting__dropdown-svg');
                elements.forEach(element => element.classList.remove('active'))
                element.classList.add('active');

            } else {
                elements.forEach(element => element.classList.remove('active'))
                element.classList.remove('active');
            }
        });

        // console.log(close);
        // close.addEventListener('click', CloseActive);

        // function CloseActive() {
        //     alert(Yes);
        // } 


        document.addEventListener('click', event => {
            const insideGroup = event.target.matches('.filters__select-group') || event.target.closest('.filters__select-group');
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


        // Клик в блоке Истории операций
        const btnActive = document.querySelectorAll('.history-form__btn');

        btnActive.forEach(function (btnActive) {
            btnActive.addEventListener('click', function(e) {
                if (e.target.classList.contains('history-form__btn')) {
                    e.target.classList.toggle('history-form__btn--active');
                }
            });
        });