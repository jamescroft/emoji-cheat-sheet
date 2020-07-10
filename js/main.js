


//Hide navbar on search
$('.navbar-toggler a.search-link').on('click', function () {
    $('.emoji-navlinks').toggleClass('show')
});

//
$('a.search-clear').on('click', function () {
    $('#search-field').val('');
    $('#navbarSearch').toggleClass('show');
    $('.emoji-navlinks').toggleClass('show');
});

