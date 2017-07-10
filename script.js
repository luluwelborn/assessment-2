
//define variables - same as using document.getElementById('redSquare');
// var redSquare = $('#redSquare');
// var blueSquare = $('#blueSquare');
// var finishLine = $('finishLine');

SOLUTION 3 - simple jQuery event moving 30px increments
$("html").keydown(function(event){
    if(event.which == "37") $("#redSquare").animate({"left" : "-=30px"}, { queue : false });

    if(event.which == "39") $("#redSquare").animate({"left" : "+=30px"}, { queue : false });

    if(event.which == "38") $("#redSquare").animate({"top" : "-=30px"}, { queue : false });

    if(event.which == "40") $("#redSquare").animate({"top" : "+=30px"}, { queue : false });
});


/*  SOLUTION 2
    var keys = [];
    $("html").keydown(function(event){

    if (keys.length > 2) return;
    keys.push (event.which);
    
    moveRedSquare();
});

function moveRedSquare () {
    var moveTo = keys[0];
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
    
    keys = keys.slice (1);
}


//keydown event
/*$(document).keydown(funtion(move)); {
	$("redSquare").animate();
	//keydown move value
	right: '+ = 20px';
};

// SOLUTION 1 - .animate with button
/*$(document).ready(function(){
    $("button").click(function(){
        $(".redSquare").animate({
            left: '20px',,
            //width: '+=20px'
        });
    });
});