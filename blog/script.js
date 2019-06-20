
$("button").on("click", function() {
  alert("Thank you for linking this!");
}); 

//$("button") selects the element whose event we want to listen to. Also we can do $("h1") or $("p").
// the on() function sets up an event listener for the button element.
//"click" this is the first parameter is the type of event to listen to. This could be hover, scroll etc.
// function() contains the thing to be done when the event 'click' happens.
//alert("clicked!") when this event happens, it pops up this to show that a button was clicked.

$("h2").on("mouseover", function(){
	$(this).css("color", "steelblue")
})


$("button").on("mouseenter", function(){
  $(this).css("background", "steelblue");
  $(this).css("font-weight", "bold")
})

$("button").on("mouseleave", function(){
  $(this).css("background", "pink");
  $(this).css("font-weight", "normal")
})

$("body").on("mouseenter", function(){
   $("article").slideDown(500);
})


