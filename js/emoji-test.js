import ifEmoji from './if-emoji.js'

//check inside the Mustache Template once it's been rendered to the page
    var checkExist = setInterval(function() {
        if ($("#render-complete").length > 0) {
            clearInterval(checkExist);
            //look for emojis rendering correctly -- this works but is very slow
            var checkList = $("#target li .emoji-symbol");
            $( "#target li .emoji-symbol" ).each(function( index ) {
                var emojiCheck = ifEmoji($( this ).text());
                 if (emojiCheck != true) {
                    $( this ).addClass('disabled');
                 }
              });
        }
     }, 100); // check every 100ms