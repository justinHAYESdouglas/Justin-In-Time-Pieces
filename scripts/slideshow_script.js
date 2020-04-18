$(document).ready(function(){

  setInterval(function(){
    var slideContainers = $("#slide-container-left,#slide-container-right");
    var activeSlide = $(".active-slide");
    var nextSlide = activeSlide.next();
    
    // fade out the slide container, add and remove the active slide class to the images, fade in container
    slideContainers.fadeOut(700,function(){ 
      activeSlide.removeClass("active-slide");
      nextSlide.addClass("active-slide");
      
      if (nextSlide.length == 0){ //loop the slideshow back to the first img in the container
        $("#first-slide-left").addClass("active-slide");
        $("#first-slide-right").addClass("active-slide");
      }
    }).fadeIn(700);   
  },4000);
});