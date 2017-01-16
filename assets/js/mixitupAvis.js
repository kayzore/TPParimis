/*global $, mixitup*/
$(document).ready(function () {
    "use strict";
    // initialisation de mixitup pour les avis
    var container = document.querySelector('.listAvis'),
        mixer = mixitup(container, {
            controls: {
                scope: 'local'
            }
        });
});