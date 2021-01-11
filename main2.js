// DOM EVENTS
// element.addEventListener(type, functionToCall)
// The code below selects the navbarbrand a tag, save it in a variable then alerts the meesage when it is clicked.
var navbar_brand = document.querySelector("a.navbar-brand");
navbar_brand.addEventListener("click", function() {
    alert("You are about to navigate to my CV page");
});

// card-div ===this below refers to the card variable
var card = document.querySelectorAll(".card-div");
for (var i=0; i<=card.length; i++){
card[i].addEventListener("mouseover", function(){
     this.style.background ="black";
     this.style.color = "pink";
 });
 card[i].addEventListener("mouseout", function(){
     this.style.background ="#13292a";
     this.style.color = "#5dcad1";
 });
 }

////The code below is a better alternative to the code just above using the isBlack class defined on the CSS file
//// It avoids the definition of styling on the JavaScript file as the pne above
//var card = document.querySelectorAll("div.card-div");
//for (var i=0; i<=card.length; i++){
//card[i].addEventListener("mouseover", function(){
//    this.classList.add("isBlack")
//});
//card[i].addEventListener("mouseout", function(){
//    this.classList.remove("isBlack")
//});
//}



//The Code below is another alternative to the one just above
// It toggles the change specified on the CSS file using the
// isBlack class and applied to the card div selected. Siimilar to the code above but the code above doesnt
// change the element back top its original state. "this" keyword referes to the card variable.
//
// var card = document.querySelectorAll("div.card-div");
//     for (var i=0; i<=card.length; i++){
//         card[i].addEventListener("mouseover", function(){
//             this.classList.toggle("isBlack");
//     });
//     }


//CONTINUE WITH THE CODE BELOW TO ENSURE THAT THE FORM IS FIELD WITHOUT SUBMITTING.

function validateForm(){
    let nameInput = document.contact.name.value; // Can also select the name input by using document.forms["contact"]["name"].value;
    
    let emailInput = document.forms["contact"]["email"].value;
    
    let textareaInput = document.forms["contact"]["textarea"].value;
    
    if (nameInput == ''){
    alert('Please fill in the form');
	return false;
}   
   else if(emailInput == ""){
    alert('Please fill in your email');
    return false;
}
 else if(textareaInput == ""){
     alert("Please enter a message");
     return false;
 }
 else{
     return true;
 }
}

validateForm();