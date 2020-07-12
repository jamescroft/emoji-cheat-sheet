


//Hide navbar on search
$('.navbar-toggler a.search-link').on('click', function () {
    $('.emoji-navlinks').toggleClass('show') 
    $('#search-field').focus()
});

//iOS version detection

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  }
  
  ver = iOSversion();
  
  if (ver[0] != null) {
    alert("This is running iOS version: " + ver );
  }