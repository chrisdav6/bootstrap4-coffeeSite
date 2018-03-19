$(function() {
  
  //Initialize Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });
  
  //Animate Banner Content
  $("header").delay(800).animate({
    opacity: 1
  },1500);
  
  $(".banner-center").delay(1300).animate({
    opacity: 1,
    top: "0"
  },1500);
  
});