// Чекбокс на странице создание шаблонов

const chexbox = document.querySelectorAll('.templates-create-new-form__checkbox');
const checkboxDropdown = document.querySelector('.checkbox__dropdown');
chexbox.forEach(function (chexbox) {
    chexbox.addEventListener('click', function (e) {
        if (e.target.classList.contains('checkbox-input')) {
            e.target.classList.toggle('history-form__btn--active');
            checkboxDropdown.classList.toggle('checkbox__dropdown--active');
        }
    });
});