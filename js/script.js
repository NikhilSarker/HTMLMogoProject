// Preloader part start

$(window).on('load', function(){
  $(".preloader").delay(500).fadeOut(1000)
})
// Preloader part end
// Back2top part start
$(".back2top i").click(function(){
  $("html, body").scroll({
    scrollTop:0
  }, 1000)
})
 
$(window).scroll(function(){
  var scrolling = $(window).scrollTop()
 
  if(scrolling > 20){
    $(".back2top i").fadeIn()
  }
  else{
    $(".back2top i").fadeOut()
  }
})



// Back2top part end
// Banner part start


$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
 
});

// Banner part end
// counter up section use

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


// Slick Paragraph part
$('.para-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow:'.next',
  prevArrow:'.prev'
});



// Light box Work part
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})