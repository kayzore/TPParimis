/*global $, mixitup*/
$(document).ready(function () {
    "use strict";
    // initialisation de mixitup pour les chambres
    var container = document.querySelector('.listChambres'),
        mixer = mixitup(container, {
            controls: {
                scope: 'local'
            }
        });

});