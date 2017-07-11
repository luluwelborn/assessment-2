
//define variables - same as using document.getElementById('redSquare');
var redSquare = $('#redSquare');
var blueSquare = $('#blueSquare');
// var finishLine = $('#finishLine');

// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_keydown_keyup
$(document).ready(function(){
    
    $("input").css("position", "absolute");

    $("input").keydown(function(event){
        if(event.keyCode===38){
            console.log("moved up");
            // $("#redSquare").animate(direction)) continue;
        }
        else if(event.keyCode===40){
            console.log("moved down");
        }
        $("input").css("right");
        $("input").css("right", "20px");
    });
    
});




/*var keys = {};
  $(document).keys(moveSquare(event){  
});
*/


//if statements to move square 30px on each keydown press
/*function moveSquare () {
    for ()  {
  if(moveTo == "37") {
    $("#redSquare").stop(true).animate({"left" : "-=30px"});
  }

  if(moveTo == "39") {
    $("#redSquare").stop(true).animate({"left" : "+=30px"});
  }

  if(moveTo == "38") {
    $("#redSquare").stop(true).animate({"top" : "-=30px"});
  }

  if(moveTo == "40") {
    $("#redSquare").stop(true).animate({"top" : "+=30px"});
  }
    // slice() method returns portion of array into a new array object
    keys = keys.slice (1);
}
}

moveSquare();