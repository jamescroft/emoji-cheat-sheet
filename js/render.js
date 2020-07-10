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
      document.getElementById('target').innerHTML += "<h2 id=\"" + titleID + "\" class=\"my-4\">" + catList[i] + "</h2>";
      document.getElementById('target').innerHTML += rendered;
    }
    // initialise list.js
    var options = {
      valueNames: ['emoji-symbol', 'emoji-description']
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
  });
}