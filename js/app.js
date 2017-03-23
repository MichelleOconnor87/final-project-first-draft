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