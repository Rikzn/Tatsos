
    

    // // Клик по "..." в блоке widget
export default function FilterDropdowns() {
    const elements = Array.from(document.querySelectorAll('.card'));

    elements.forEach(element => {
        const btn = element.querySelector('.card-more');

        btn.addEventListener('click', event => {
            event.preventDefault();
            
            if (!element.classList.contains('card--active')) {
                elements.forEach(element => element.classList.remove('card--active'))
                element.classList.add('card--active');
                
            } else {
                elements.forEach(element => element.classList.remove('card--active'))
                element.classList.remove('card--active');
            }
        });


        document.addEventListener('click', event => {
            const insideGroup = event.target.matches('.card-more') || event.target.closest('.card-more');
            if (!insideGroup) {
                elements.forEach(element => element.classList.remove('card--active'))
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

    // Клик по авторизованному пользователю
    const authorizedUser = document.querySelectorAll('.menu__authorized-user'); 

    for(let menuItem of authorizedUser) {
        menuItem.addEventListener("click", function() {
            menuItem.classList.toggle('menu__authorized-user--active');
          
        });
    }

    // клик в блоке История платежей > Настройки > Выбор меню
    const historyBtn = document.querySelectorAll('.history-form-btn');

    for(let historyItem of historyBtn) {
        historyItem.addEventListener("click", function() {
            historyItem.classList.toggle('history-form--active');
          
        });
    }

        // Клик в блоке Истории операций
        const btnActive = document.querySelectorAll('.history-form__btn');

        btnActive.forEach(function (btnActive) {
            btnActive.addEventListener('click', function(e) {
                if (e.target.classList.contains('history-form__btn')) {
                    e.target.classList.toggle('history-form__btn--active');
                }
            });
        });