//START Carabus Claudiu Petrica


//We are taking the ID of the butterfly and inserting it in a constant
const butterfly=$("#butterfly");

const birdRight=$("#birdRight");
//Here we are saying to the program to run the functions after the page is loaded 
$(document).ready(function(){

    //Here we are calling and using the function to animate the butterfly
    animateDivButterfly(butterfly);
   animateDivBirdRight(birdRight);
});


//Here we are creating a function to generate a random position for the butterfly
function makeNewPositionButterfly(){
    
    //Here we are making a variable for the max height of our object in this case the butterfly to not go over the screen height
    var h = $(window).height() - 200;
    //Here we are making a variable for the max width of our object in this case the butterfly to not go over the screen wiidth
    var w = $(window).width() - 300;
    
    //Here we are using the function Math.random to create a random height on the screen where  the buttterfly will move to  
    var nh = Math.floor(Math.random(window ) * h);
    //Here we are using the function Math.random to create a random width on the screen where  the buttterfly will move to  
    var nw = Math.floor(Math.random(window ) * w);
    
    //At the end of this function here are the coordonates where the butterfly will move 
    return [nh,nw];    
}


//Here we are creating a function to make the butterfly move
function animateDivButterfly(myclass){
    //We are implementing our previous function for generating a random position for the butterfly
    var newq = makeNewPositionButterfly();
    //Here we are taking the coordonates for height and width and implement them inside this function giving also the speed of the butterffly
    $(myclass).animate({ top: newq[0], left: newq[1] }, 3000,   function(){
        //At the end of this function we are recalling it to create an loop for the butterfly to never stop 
      animateDivButterfly(myclass);        
    });
    
};

//Here we are using jqerry t set a function when to mouse will hover over the butterfly
$('#butterfly').mouseover(function(){
    //Again we are using the random position function 
    var neww = makeNewPositionButterfly();

    //Here we are making the buttterfly move and where to stop after it was hovered on him with a faster speed 
    $("#butterfly").stop(true).delay(50).animate({top : neww[0], left: neww[1]},300).animateDiv;
    //Here we are saying how it will be displayed on the screen to not just dissapear from his current position 
    //and apper o another part of the screen ,bassically we are doing the moving animation 
    setTimeout(animateDivButterfly(butterfly), 500)
});
//Here we are creating a function to generate a random position for the bird
function makeNewPositionBirdRigh(){
     //Here we are making a variable for the max height of our object in this case the bird to not go over
     // the screen height and also to stay in the top part of the screen
    var h=$(window).height()/10;
    //Here we are making a variable for the max width of our object in this case the bird to not go over the screen width
    var w=$(window).width()-300;
    //Here we are setting height on the screen where  the bird will stay 
    var wh=Math.floor(1*h);
    //Here we are using the function Math.random to create a random width on the screen where  the bird will move to  
    var ww=Math.floor(Math.random(window)*w);
    //At the end of this function here are the coordonates where the bird will move 
    return[wh,ww];
}

//Here we are creating a function to make the bird move
function animateDivBirdRight(myclass){
    //We are implementing our previous function for generating a random position for the bird
    var neww=makeNewPositionBirdRigh();
    //Here we are taking the coordonates for height and width and implement them inside this function giving also the speed of the bird
    $(myclass).animate({ top: neww[0], left: neww[1] }, 1000,   function(){
        //At the end of this function we are recalling it to create an loop for the bird to never stop 
        animateDivBirdRight(myclass);
});
};

//END Carabus Claudiu Petrica
