
export default function FilterDropdowns() {
    // Медиа запрос экран меньше 700px скрипт работает
    if (window.matchMedia("(max-width:700px)").matches) {
        const elements = Array.from(document.querySelectorAll('.js-filters-dropdown'));

        elements.forEach(element => {
            const btn = element.querySelector('.filters__select-group-btn');
            const noScroll = document.querySelector('body');
            btn.addEventListener('click', event => {
                event.preventDefault();
                
                if (!element.classList.contains('active')) {
                    elements.forEach(element => element.classList.remove('active'))
                    element.classList.add('active');
                    noScroll.classList.add('no-scroll');
                    console.log(noScroll);
                } else {
                    elements.forEach(element => element.classList.remove('active'))
                    element.classList.remove('active');
                }
            });
    
            document.addEventListener('click', event => {
                const insideGroup = event.target.matches('.filters__select-group') || event.target.closest('.filters__select-group');
                if (!insideGroup) {
                    elements.forEach(element => element.classList.remove('active'))
                } 
            });
        });
    } else {
        const elements = Array.from(document.querySelectorAll('.js-filters-dropdown'));

        elements.forEach(element => {
            const btn = element.querySelector('.filters__select-group-btn');
    
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
                const insideGroup = event.target.matches('.filters__select-group') || event.target.closest('.filters__select-group');
                if (!insideGroup) {
                    elements.forEach(element => element.classList.remove('active'))
                } 
            });
        });
    }


   


     // раскрытия аккардиона у сайбара
    const accordions = document.querySelectorAll('.js-accordion');
    // Медиа запрос экран меньше 700px скрипт работает
    if (window.matchMedia("(min-width:700px)").matches) {     
        for(let item of accordions) {
        item.addEventListener('click', function() {
            if(this.classList.contains('js-accordion')) {
                this.classList.toggle('js-accordion--active');
            }
            })
        }
    } else {
       for(let item of accordions) {
        item.addEventListener('click', function() {
            if(this.classList.contains('js-accordion--active')) {
                this.classList.remove('js-accordion--active');
            } else {
                for(let el of accordions) {
                    el.classList.remove('js-accordion--active');
                }
                    this.classList.add('js-accordion--active');
                }
            })
        }
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




} 
  
    


        