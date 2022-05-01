
while(true){
    
    let randomX =Math.floor(Math.random()*screen.width)
    let randomY = Math.floor(Math.random()*screen.height)
     $("#butterfly").css({"left" : randomX, "top" : randomY});
    
    
}

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

