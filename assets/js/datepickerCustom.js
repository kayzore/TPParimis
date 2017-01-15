/*global $*/
$(document).ready(function () {
    "use strict";
    var date = new Date(),
        today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);

    $('.datepickerArrivee').datepicker({
        format: "dd/mm/yyyy",
        clearBtn: true,
        language: "fr",
        todayHighlight: true,
        toggleActive: true,
        startDate: today
    });
    $('.datepickerDepart').datepicker({
        format: "dd/mm/yyyy",
        clearBtn: true,
        language: "fr",
        todayHighlight: true,
        toggleActive: true,
        startDate: today
    });
    
});