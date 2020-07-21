
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
  var emojiListSmileysEmotion = new List('smileys-&-emotion', options);
  var emojiListPeopleBody = new List('people-&-body', options);
  var emojiListAnimalsNature = new List('animals-&-nature', options);
  var emojiListFoodDrink = new List('food-&-drink', options);
  var emojiListTravelPlaces = new List('travel-&-places', options);
  var emojiListActivities = new List('activities', options);
  var emojiListObjects = new List('objects', options);
  var emojiListSymbols = new List('symbols', options);
  var emojiListFlags = new List('flags', options);

  // find search for list
  $('#search-field').on('keyup', function (e) {
    $('.cat-divider').hide();
    $('.row h2').hide();
    var searchString = $(this).val();

    emojiListSmileysEmotion.search(searchString);
    emojiListPeopleBody.search(searchString);
    emojiListAnimalsNature.search(searchString);
    emojiListFoodDrink.search(searchString);
    emojiListTravelPlaces.search(searchString);
    emojiListActivities.search(searchString);
    emojiListObjects.search(searchString);
    emojiListSymbols.search(searchString);
    emojiListFlags.search(searchString);

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
    emojiListSmileysEmotion.search($('#search-field').val());
    emojiListPeopleBody.search($('#search-field').val());
    emojiListAnimalsNature.search($('#search-field').val());
    emojiListFoodDrink.search($('#search-field').val());
    emojiListTravelPlaces.search($('#search-field').val());
    emojiListActivities.search($('#search-field').val());
    emojiListObjects.search($('#search-field').val());
    emojiListSymbols.search($('#search-field').val());
    emojiListFlags.search($('#search-field').val());
    $('.cat-divider').show();
    $('.row h2').show();
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