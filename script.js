// define key codes & squares
var redSquare = $("redSquare");

// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_keydown_keyup
$( document ).ready(function() {
  $("redSquare").css("position", "absolute");

/*$("redSquare").keydown(function(event){
        if(event.keyCode===38){
            console.log("moved up");
            $("#redSquare").css("right", "+20px");
            // $("#redSquare").animate(direction)) continue;
        }
        else if(event.keyCode===40){
            console.log("moved down");
        } */
  $("redSquare").keypress(function( event ) {
    if (event.which == 38) {
     console.log("keypressed up!");
    }
  });
});
    

/*    
};
var keys = {};
keys.UP = 38;
keys.DOWN = 40;

var redSquare = {
  x: 50,
  y: 50,
  element: document.getElementById("redSquare")
};

// detecting the keys
document.body.onkeyup =
document.body.onkeydown = function(e){
  var kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
};

// i found dx/dy to set coordinates, might not be best practices
var moveredSquare = function(dx, dy){
    redSquare.x += dx||0;
    redSquare.y += dy||0;
    redSquare.element.style.left = redSquare.x + 'px';
    redSquare.element.style.top = redSquare.y + 'px';
};

//move with keys
var detectredSquareMovement = function(){
      if ( keys[keys.UP] ) {
        moveredSquare(0, -5);
      }
      if ( keys[keys.DOWN] ) {
        moveredSquare(0, 5);
      }
    };

// screen position
moveredSquare();