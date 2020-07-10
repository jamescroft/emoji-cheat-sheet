


//Hide navbar on search
$('.navbar-toggler a.search-link').on('click', function () {
    $('.emoji-navlinks').toggleClass('show') 
    $('#search-field').focus()
});