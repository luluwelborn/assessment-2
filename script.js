// define key codes & squares
var redSquare = $("redSquare");
var blueSquare = $("redSquare");

$(document).ready(function() {
  console.log("ready is working!");

  $(document).keydown(function(event){
    if(event.keyCode === 38) {
      console.log("keypressed up!");
       $("#redSquare").finish().animate({
            left: "+=50"
        });
    }
    else if(event.keyCode === 40){
      console.log("keypressed down");
      $("#blueSquare").finish().animate({
            left: "+=50"
        });
    }
  });
});
    


// will need a setInterval(function();to define redSquare movement 38, +20px;
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_keydown_keyup