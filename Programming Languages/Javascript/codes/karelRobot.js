/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    right();
    upLeft();
    left();
    upRight();
    right();
    upLeft();
    left();
    upRight();
    right();
}

function right(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   }
   
function left(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function upLeft(){
   turnLeft();
   move();
   turnLeft();
   }
   
function upRight(){
   turnRight();
   move();
   turnRight();
   }