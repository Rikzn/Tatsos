
    export default function checkBox() {

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

        // Количество выбранных чекбоксов
        let chosen = document.querySelector('.history-form__group-chexbox');
        let checkBoxItem = document.querySelectorAll('.js-checkbox');
        chosen.addEventListener('click', checkBox);
        function checkBox () {
        // let checkCount = $('history-form__group-dropdown-inner').find('input[checkbox]:checked').length;
        let checkCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        
        chosen.innerHTML = checkCount;
        console.log(checkCount);
        } 
        
} 



