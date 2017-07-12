// define key codes & squares
var redSquare = $("redSquare");
var blueSquare = $("redSquare");

//boolean flag set at false Win 

$(document).ready(function() {
  // define a keycode number to move 1st object pixel length
  $(document).keydown(function(event){
    if(event.keyCode === 38) {
        if($("#redSquare").css("left") >= "650px"){
            window.alert("You won, Red!");
        }
      console.log("keypressed up!");
       $("#redSquare").finish().animate({
            left: "+=50"
        });
    }
    // define a keycode number to move 2nd object pixel length
    else if(event.keyCode === 40){
        if($("#blueSquare").css("left") >= "650px"){
            window.alert("You won, you're my boy, Blue!");
        }
        // use jQuery to get blue sq left value
      console.log("keypressed down");
       $("#blueSquare").finish().animate({
        left: "+=50"
        });
    }
  });
  
 /* var maxdistance = ();

  function finishLine() {
    if (redSquare === finishLine) {
      window.alert("Game won. Please reset the game.");
    }
  } */
});
    


// will need a setInterval(function();to define redSquare movement 38, +20px;
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_keydown_keyup