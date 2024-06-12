console.log("Here is the great 'Lyrics of the song 99 Bottles of Beer'");
var n=99;
while(n!=0){
    if(n===2){
    console.log(n+" bottles of beer on the wall, "+(n--)+" bottles of beer.\nTake one down and pass it around, "+n+" bottle of beer on the wall.");    
    }
    else if(n===1){
    console.log(n+" bottle of beer on the wall, "+(n--)+" bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
    }
    else{
    console.log(n+" bottles of beer on the wall, "+(n--)+" bottles of beer.\nTake one down and pass it around, "+n+" bottles of beer on the wall.");
}
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
