//Check Off Specific Todo List By Clicking
$("ul").on("click", "li", function(){//on click is better here since we are expecting the user to add new todos. It works for potential features instead of click which works only for current features
 //We need to add the clicklistener to the ul parent element then add lis. This is because the parent fully exists but the lis will be added as todo lists.
 //We are saying when an li is clicked inside a ul, the code showuld run.
$(this).toggleClass("completed");
});


//click on x to delete todo
//use the event object to stop event bobbling, which means that any event triggered on the span will go to the li, then the ul then the body until the html element where it stop etc.
// It means that the event will trigger from the child to the parents. 
// To prevent the parent (li element) click event from triggering when we click on the child (span), we need to tell the event inside of the span to not bubble anymore. So it should not trigger any of the events inside the parents element
//We need to pass in the event object (e or event) the pass in the event.stopPropagation method
$("ul").on("click", "span" , function(event){ // similar to the one above but the code should only run when a span is clicked inside of a ul.
 $(this).parent().fadeOut(500, function(){ //'this' here refers to the span which was clicked at first
 	$(this).remove(); // 'this' here referes to the parent which we are fading out. This is why we have .parent.
 }); // This will fadeout then remove the parent element which is the li upon the click of the span element. Remember if you dont add the call back function and duration, the remove will not wait for the fadeout to finish
 event.stopPropagation(); //This method will stop the event from bubbling
});

//Add a listener on the text input
$("input[type ='text']").keypress(function(event){
  if(event.which === 13){
  	//Grabbing new todo text from input
  	var inputText = $(this).val();
  	//Create a new li and add to ul
  	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ inputText + "</li>")
  	$(this).val(""); // This clears the text input after the value has been appended to the li
  	
  }
});

 $(".fa-plus").click(function(){
  	$("input[type ='text']").fadeToggle();
  });
