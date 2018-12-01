let startDate = null;
let endDate = null;
$('.date-picker').datepicker( {
    constrainInput: true,
    changeMonth: true,
    changeYear: true,
    showOtherMonths: true,
    onSelect: function(dateText, inst) {
        let date = $(this).datepicker('getDate');
        startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
        endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 6);
        let dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
        $('#startDate').text($.datepicker.formatDate( dateFormat, startDate, inst.settings ));
                    $('#endDate').text($.datepicker.formatDate( dateFormat, endDate, inst.settings ));
                    $(this).val($.datepicker.formatDate( dateFormat, startDate, inst.settings ) + " - " + $.datepicker.formatDate( dateFormat, endDate, inst.settings ));
                    $(function() {
                        $.datepicker.setDefaults($.datepicker.regional['uk']);
                        $("#StartDate").datepicker();
                        $('#StartDate').datepicker('option', 'dateFormat', 'yy-mm-dd');
                    });
    }
});
