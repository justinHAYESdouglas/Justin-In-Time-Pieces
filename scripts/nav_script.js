$(document).ready (function(){
  //The exit button is under the hamburger menu icon to save time on coding animations.
  $("header button").click(function(){
    $("nav ul, #burger").animate({
      height: "toggle"
    }).css("display", "flex");
  });
});