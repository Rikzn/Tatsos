let select = function() {
    let selectHeader = document.querySelectorAll('.contact-select__header');
    let selectItem = document.querySelectorAll('.contact-select__item');

    selectHeader.forEach( item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach( item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('contact-select--active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.contact-select'),
            currentText = select.querySelector('.contact-select__current');
            currentText.innerText = text;
            select.classList.remove('contact-select--active')
    }
};


select();