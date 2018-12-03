/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
( function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "jQuery.UI.1.7.2" ], factory );
    } else {

        // Browser globals
        factory( jQuery.datepicker );
    }
}( function( datepicker ) {

    datepicker.regional.uk = {
        closeText: "Закрити",
        prevText: "&#x3C;",
        nextText: "&#x3E;",
        currentText: "Сьогодні",
        monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
            "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
        monthNamesShort: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
            "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
        dayNames: [ "понеділок","вівторок","середа","четвер","п’ятниця","субота","неділя" ],
        dayNamesShort: [ "пнд","вів","срд","чтв","птн","сбт","нед" ],
        dayNamesMin: [ "Пн","Вт","Ср","Чт","Пт","Сб","Нд" ],
        weekHeader: "Тиж",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.uk );

    return datepicker.regional.uk;
} ) );
