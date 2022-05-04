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


//jack code start
$(document).ready(function () {
  //apples going to tree
  apples($("#apple1"));
  apples($("#apple2"));
  apples($("#apple3"));
});

//picking apples to basket
$("#apple1").on("click", function(){
  $("#apple1").addClass("shake");
  moveApple( $("#apple1"));
});
$("#apple2").on("click", function(){
  $("#apple2").addClass("shake");
  moveApple( $("#apple2"));
});
$("#apple3").on("click", function()
{
  $("#apple3").addClass("shake");
  moveApple( $("#apple3"));
});

//move apples to basket
function moveApple(apple){
  setTimeout(function(){
    var basketTop=($('.basket').first().position().top);
    var basketLeft=($('.basket').first().position().left);
    var basketWidth=$('.basket').first().width()-100;
    apple.animate({
      'top':basketTop+170+'px','left':basketLeft+Math.round(Math.random() * basketWidth)+30+'px'
    });
  },2000)
}

//apples going to tree 
function apples(target) {
 //console.log($('#tree').position().top);
  var treeTop=($('#tree').position().top);
  var treeLeft=($('#tree').position().left);
  var treeWidth=$('#tree').width()-100;
  var treeHeight=$('#tree').height()/3;
  var posx = Math.round(Math.random() * treeWidth) + treeLeft+50;
  var posy = Math.round(Math.random() * treeHeight) + treeTop;
  target.css({
    "top":  posy+100+'px', "left": posx+'px',zindex:10,
  });
}
//jacks code end








