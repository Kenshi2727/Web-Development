// $(document).ready(function() {
//    $("h1").css("color", "red");
// });
/* Not required as we have put our CDN link just above JS script tag*/

$("h1").css("color", "white");
$("h1").addClass("big-title");

// $("button").text("Don't Click Me");
$("button").html("<em>Hey Click Me<em>");
/* The `<em>` tag in HTML is used to emphasize text, typically
rendering it in italics. In this case, the text "Hey Click Me"
inside the `<em>` tags will be displayed in italics on the
button. */









//attribute manipulation
$("a").attr("href","https://www.pizzahut.co.in/");

//adding event listeners using j query
$("h1").click(function(){
   $("h1").css("color","purple");
})

//adding event listeners using j query
$("button").click(function(){
   $("h1").css("color","blue");
})


$("input").keydown(function(event){
   $("h1").text(event.key);
});





//adding animations using j query
$("button").click(function(){
   // $("h1").toggle();
   // $("h1").fadeOut();
   // $("h1").fadeIn();
   // $("h1").fadeToggle();
   // $("h1").slideToggle();


   //chaining
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
