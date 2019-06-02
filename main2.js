// DOM EVENTS
// element.addEventListener(type, functionToCall)
// The code below selects the navbarbrand a tag, save it in a variable then alerts the meesage when it is clicked.
var navbar_brand = document.querySelector("a.navbar-brand");
navbar_brand.addEventListener("click", function() {
    alert("You are about to navigate to my CV page");
});

// card-div ===this below refers to the card variable
// var card = document.querySelectorAll("div.card-div");
// for (var i=0; i<=card.length; i++){
// card[i].addEventListener("mouseover", function(){
//     this.style.background ="black";
//     this.style.color = "pink";
// });
// }


//The Code below toggles the change specified on the CSS file using the
// isBlack class and applied to the card div selected. Siimilar to the code above but the code above doesnt
// change the element back top its original state. "this" keyword referes to the card variable.

var card = document.querySelectorAll("div.card-div");
for (var i=0; i<=card.length; i++){
    card[i].addEventListener("mouseover", function(){
        this.classList.toggle("isBlack");
    });
    }
    