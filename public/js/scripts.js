$(function() {
  
  //Initialize Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });
  
  //Animate Banner Content
  $(".banner-center").delay(800).animate({
    opacity: 1,
    top: "0"
  },1000);
  
});