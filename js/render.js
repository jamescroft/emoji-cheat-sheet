
// render.js
function renderEmoji() {
  $.getJSON("data/emoji-v13.json", function (json) {
    var bodyTemplate = document.getElementById('body-template').innerHTML;

    //Create a list of unique emoji categories from JSON file
    var catLookup = {};
    var catList = [];
    for (var item, i = 0; item = json.emojis[i++];) {
      var category = item.category;
      if (!(category in catLookup)) {
        catLookup[category] = 1;
        catList.push(category);
      }
    }

    //Return an array of emojis sorted into categories
    var returnedData = [];
    for (i = 0; i < catList.length; i++) {
      var categoryData = $.grep(json.emojis, function (element, index) {
        return element.category == catList[i];
      });
      returnedData.push(categoryData)
    }

    //Render the returned data array into the page with headings
    for (i = 0; i < returnedData.length; i++) {
      var rendered = Mustache.render(bodyTemplate, returnedData[i]);
      var titleID = catList[i].replace(/\s+/g, "-").toLowerCase();
      if (i < 1) {
        document.getElementById('target').innerHTML += "<h2 id=\"" + titleID + "\" class=\"my-1\">" + catList[i] + "</h2>";
      }
      else {
        document.getElementById('target').innerHTML += "<hr class=\"cat-divider\" /><div class=\"cat-heading\"><h2 id=\"" + titleID + "\">" + catList[i] + "</h2></div>";
      }
      document.getElementById('target').innerHTML += rendered;
    }
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
}