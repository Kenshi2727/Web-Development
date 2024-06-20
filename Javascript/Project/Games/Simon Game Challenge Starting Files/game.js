//start the game
var started=false;
var level=0;
$(document).keydown(function(){
   if(!started){
    nextSequence();
    started=true;
  
   }
});


var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
alert("Simon Go Back!!!!❤️‍🔥");

function nextSequence(){
    //show level
    level++;
    $('#level-title').text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeOut('fast').fadeIn('fast');
    playSound(randomChosenColour);
}


function checkAnswer(currentLevel){//passing the index of the current level,that is, the last element of the userClickedPattern array
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
            userClickedPattern=[];
        }
    }
    else{
        new Audio("sounds/wrong.mp3").play();
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

$(".btn").click(handler);
function handler(){
    var userChosenColour=this.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);//every time a button is clicked, we are sending the index of the last element of the userClickedPattern array as userClickedPattern===[] after every level
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
    $("#"+currentColor).removeClass("pressed");   
    }, 100);
}

function playSound(colorName){
    // switch (colorName) {
    //     case "red":
    //         var red=new Audio("sounds/red.mp3");
    //         red.play();
    //         break;
    //     case "blue":
    //         var blue=new Audio("sounds/blue.mp3");
    //         blue.play();    
    //         break;
    //     case "green":
    //         var green=new Audio("sounds/green.mp3");
    //         green.play();
    //         break;
    //     case "yellow":
    //         var yellow=new Audio("sounds/yellow.mp3");
    //         yellow.play();   
    //         break;
    //     default:console.log("Error in playSound()");
    //         break;
    // }

    var audio = new Audio("sounds/" + colorName + ".mp3");
    audio.play();    
}

function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}

    
