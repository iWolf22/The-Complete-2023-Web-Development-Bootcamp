// -----===== 16.1 Introduction To DOM =====-----

// Selecting an element with DOM
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Changing values with DOM
heading.innerHTML = "Good Bye";
heading.style.color = "red";
document.querySelector("button").click();

// Properties vs. Methods For DOM Elements

// Properties
car.colour; // Get Property
car.numberOfDoors = 0; // Set Property

// Methods (Similar to function, but an object has to do it)
car.drive(); // Call Method
car.stop();



// -----===== 16.2 Selecting HTML Elements With JavaScript =====-----

// ---=== Get Element ===---

// Gets all list elements in an array
document.getElementsByTagName("li");

// Sets the 3rd list element to purple
document.getElementsByTagName("li")[2].style.color = "purple";

// Gets the number of li elements
document.getElementsByTagName("li").length;

// Returns an array with all items with class "btn"
document.getElementsByClassName("btn");

// Returns the singular ID of title
document.getElementById("title");

// Changes id title to "Good Bye :("
document.getElementById("title").innerHTML = "Good Bye :(";

// ---=== Query Selector ===---

// Query Selector - Exact same format as css
document.querySelector("h1");
document.querySelector(".btn");
document.querySelector("#title");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list .item a").style.color = "red";

// Query Selector All - Returns an array of multiple items
document.querySelectorAll("ul li");

// -----===== 16.3 Manipulation CSS Using JavaScript =====-----

//https://www.w3schools.com/jsref/dom_obj_style.asp
// Camel case instead of dashes on the style._____
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.visibility = "hidden";
document.querySelector("body button.btn").style.backgroundColor = "yellow";

// -----===== 16.4 Structure vs. Style vs. Behaviour =====-----




































