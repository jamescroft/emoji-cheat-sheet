// render.js
function renderEmoji() {
    $.getJSON("data/emoji-v13.json", function (json) {
        var template = document.getElementById('template').innerHTML;
        var rendered = Mustache.render(template, json);
        document.getElementById('target').innerHTML = rendered;
    });
}