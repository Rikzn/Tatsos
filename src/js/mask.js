import Inputmask from 'inputmask';

// Маска для банковской карточки

export default function maskInput() {

    let cardInputs = document.querySelectorAll('.js-card-number');
    Array.from(cardInputs).forEach(input => {
        var im = new Inputmask({
            mask: '9999 9999 9999 9999',
            placeholder: "0000 0000 0000 0000"
        });
        im.mask(input);
    });

    let cardMask = document.querySelectorAll('.js-phone-mask');
    cardMask.forEach(input => {
        var im = new Inputmask({
            mask: '+7 (999) 999 99 99',
            placeholder: "+7 (000) 000 00 00",
            showMaskOnHover: false
        });
        im.mask(input);
    });
  
} 