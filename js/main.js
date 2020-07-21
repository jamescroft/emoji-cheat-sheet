
$(document).ready(function () {


  //Hide navbar on search
  $('.navbar-toggler a.search-link').on('click', function () {
    $('.emoji-navlinks').toggleClass('show')
    $('#search-field').focus()
  });

  // initialise list.js
  var options = {
    valueNames: ['emoji-symbol', 'emoji-description', 'emoji-tags']
  };
  var emojiList = new List('emoji', options);

  // find search for list
  $('#search-field').on('keyup', function (e) {
    var searchString = $(this).val();
    emojiList.search(searchString);
    if (e.which == 13) {
      $(this).blur();
      $('#navbarSearch').toggleClass('show');
      $('.emoji-navlinks').toggleClass('show');
    }
  });

  // clear search field and empty filter
  $('a.search-clear').on('click', function () {
    $('#navbarSearch').toggleClass('show');
    $('.emoji-navlinks').toggleClass('show');
    $('#search-field').val("");
    emojiList.search($('#search-field').val());
  });

  // initialise clipboard.js
  new ClipboardJS('.btn');

  //initialise tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.btn').on('click', function () {
    $(this).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy").tooltip("_fixTitle");
  });

});