//Net image following mouse (Made by Bruno)
$(document).mousemove(function (e) {
    $('#net').offset({
        left: e.pageX,
        top: e.pageY + 10

    });
});

//Net changing direction when mouse is moving sides
$(document).mousemove(function (e) {
    let a = e.pageX
    var currentMousePos = { x: -1, y: -1 };

    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;


        if (a > currentMousePos.x) {
            jQuery('#net').removeClass('mirror');


        }
        else {
            jQuery('#net').addClass('mirror');
        }

    });


})

//Additional function by Bruno. 
//By clicking on clouds and sun, there's thunder effect applied

$("#cloud").click(function () {
    $("#cloud").attr("src", "images/thunder.png");
    $("body").css("background-color", "#808080");
    setTimeout(function () {
        $("#cloud").attr("src", "images/cloud.png");
        $("body").css("background-color", "lightblue");
    }, 500);
})

//Additional function by Guilherme
//Duck is running to sides when pressing arrow keys 

$(document).keydown(function(move){
    switch (move.which){
    case 37:    // keys left and right
        $("#duck").finish().animate({
            left: "-=10"
        });        

        break;

    case 39:    // key right
        $("#duck").finish().animate({
            left: "+=10"
        });    

        break;
    }
});

function duckBounds(e) {
    let duck = $("#duck");

    if(duck.x < 0) 
    {
        duck.x = 0;
    }
    else if (duck.x > e.pageX || duck.x < e.pageX ) {
        duck.x = e.pageX - duck.width;
    }
}

