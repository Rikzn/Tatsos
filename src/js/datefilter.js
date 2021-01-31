// input выбор даты
$(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Сброс',
            applyLabel: "Применить",
            firstDay: 1,
            fromLabel: "От",
            toLabel: "До",
            customRangeLabel: "Произвольный",
            daysOfWeek: [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            monthNames: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
        }
        
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD.MM.YY') + ' - ' + picker.endDate.format('DD.MM.YY'));
        $(this).addClass('history-form__btn--active');
    });
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('Выберите дату');
        $(this).removeClass('history-form__btn--active');
    });
  });

