/*eslint-env browser*/
/*jslint browser: true*/
/*global $, alert*/

//JS
$('document').ready(function () {
    "use strict";
    //Script Here
    //Darkmode Switcher
    $('#DarkModeSwitcher > button').click(function () {
        $('body').toggleClass('Dark-Mode');
    });
});
