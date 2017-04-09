  //Baby art or real art quiz q1
   $(document).ready(function() {
    //alert("hello!");
        $("#quiz-form").on("submit",function(event) {
        event.preventDefault();

      var $answer = $("#quiz-answer");
      var answer = $answer.val();
      if (answer === "baby") {
         $("#result").text("Correct! This is a Sophie original!");

      } else {
         $("result").text("Incorrect, try again!");
      }
       
   });

   });
 
    //   Check what answer they picked
    //   And tell them if they're correct

    // hamburger icon for mobile

    $(function() {
  // on hamburger click
  $('#hamburger').on('click', function() {
    // show nav
    $('header nav').slideToggle();
  });
    
});

    //user visits site
    //wait 10 seconds
    //email subscription box pops up
    //user enters email address
    //or
    //user presses cross button

    //slidetoggle for read more on blog posts
    $(document).ready(function() {
  $('.readmore').on('click', function(event){
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });
  $('.readless').on('click', function(event){
    event.preventDefault();
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  });
 // $('.learnmore').on('click', function(event){
    //event.preventDefault();
    //$('#learnmoretext').slideDown();
    //$('.learnmore').hide();
  //});
});

    $(document).ready(function() {
  $('.readmoretwo').on('click', function(event){
    event.preventDefault();
    $('#show-this-on-clicktwo').slideDown();
    $('.readmoretwo').hide();
    $('.readlesstwo').show();
  });
  $('.readlesstwo').on('click', function(event){
    event.preventDefault();
    $('#show-this-on-clicktwo').slideUp();
    $('.readlesstwo').hide();
    $('.readmoretwo').show();
  });
  $('.learnmore').on('click', function(event){
    event.preventDefault();
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  });
});

    