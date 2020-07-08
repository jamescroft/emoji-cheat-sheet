


//Scrollspy

$(document).ready(function () {
    $(window).on('activate.bs.scrollspy', function (e) {
        console.log("target: " + e.target);
  console.log("currentTarget: " + e.currentTarget);
    })
})