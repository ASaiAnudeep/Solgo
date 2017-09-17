$(document).ready(function () {
    $(".app-side-nav").sideNav();
});

var app = (function () {
    return {
        initializeTabs: function () {
            $('ul.tabs').tabs();
        },
        func2: function () {
            alert('function 2 called');
        }
    }
})(app||{});