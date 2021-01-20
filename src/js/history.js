    // Клик в блоке Истории операций
    const btnActive = document.querySelectorAll('.history-form__btn');

    btnActive.forEach(function (btnActive) {
        btnActive.addEventListener('click', function(e) {
            if (e.target.classList.contains('history-form__btn')) {
                e.target.classList.toggle('history-form__btn--active');
            }
        });
    });