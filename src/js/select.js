let select = function() {
    let selectHeader = document.querySelectorAll('.js-select__header');
    let selectItem = document.querySelectorAll('.js-select__item');

    selectHeader.forEach( item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach( item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('js-select--active');
    }

    function selectChoose() {
        let block = this.innerHTML,
            select = this.closest('.js-select'),
            currentBlock = select.querySelector('.js-select__current');
            currentBlock.innerHTML = block;
            select.classList.remove('js-select--active')
    }
};



select();


  const defaultSelect = () => {
    const elements = document.querySelectorAll('.js-choice');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
        });
    });
  }
  
  defaultSelect();