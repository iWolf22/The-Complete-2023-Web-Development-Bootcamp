// -----===== Learning jQuery =====-----

$(document).ready(function() {
    $("h1").css("color", "red");
})




// ---=== Selecting Properties ===---

// Long version
document.querySelector("h1");
// Short version
$("h1");

// Long version
document.querySelectorAll("button");
// Short version
$("button");



// ---=== Manipulating Styles ===---

// Adds the colour green and font size of 5 rem
$("h1").css("color", "green");
$("h1").css("font-size, 5rem");

// Stores the current color and font size in a variable
var colorOfH1 = $("h1").css("color");
var fontSizeOfH1 = $("h1").css("font-size");

// .big-title {
//     font-size: 10rem;
//     color: yellow;
//     font-family: cursive;
// }

// Adds and removes classes
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

// .margin-50 {
//     margin: 50px;
// }

// Adds two classes at once
$("h1").addClass("big-title margin-50");

// Checks if the element has a class by returning a true or false boolean
$("h1").hasClass("margin-50");



// ---=== Manipulating Text ===---

// Changing text
$("h1").text("bye");
$("button").text("Don't click me");

// Changing html
$("h1").html("<em>Bold</em> Text");



// ---=== Manipulating Attributes ===---

// Gets the source attribute
$("img").attr("src");

// Sets the source attribute to a random photo
$("img").attr("src", "https://picsum.photos/200/300");

// Gets all of the classes on img
$("img").attr("class");



// ---=== Adding Event Listeners ===---

// Adding red to all the buttons
$("button").click(function() {
    $("button").css("color", "red");
});

// Adding red to one button - Long way
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        this.style.color = "red";
    });
}
// Adding red to one button - Short way
$("button").click(function() {
    $(this).css("color", "red");
});

// Saving user input to an input box
$("input").keypress(function(event) {
    console.log(event.key);
});

// Saving onscreen user input
$("html").keypress(function(event) {
    console.log(event.key);
});

// Updating user input into h1 element
$("html").keypress(function(event) {
    console.log(event.key);
    $("h1").text($("h1").text() + event.key);
});

// jQuery "on"
// ex. 1
$("button").on("click", function() {
    $(this).css("color", "purple")
});
// ex. 2
$("button").on("mouseover", function() {
    $(this).css("color", "purple")
});



// ---=== Adding and Removing Elements ===---

// Adding a new button from JavaScript

// On top
$("h1").before("<button>on top</button>");

// Below
$("h1").after("<button>below</button>");

// Left (embeds itself in the h1)
$("h1").prepend("<button>left</button>");

// Right (embeds itself in the h1)
$("h1").append("<button>right</button>");

// Removing buttons from JavaScript
$("button").remove();



// ---=== jQuery Animations ===---

// Show and hide
$("button").on("click", function() {
    $("h1").show();
});
$("button").on("click", function() {
    $("h1").hide();
});
$("button").on("click", function() {
    $("h1").toggle();
});


// Fade in and out
$("button").on("click", function() {
    $("h1").fadeIn();
});
$("button").on("click", function() {
    $("h1").fadeOut();
});
$("button").on("click", function() {
    $("h1").fadeToggle();
});

// Slide up and down
$("button").on("click", function() {
    $("h1").slideUp();
});
$("button").on("click", function() {
    $("h1").slideDown();
});
$("button").on("click", function() {
    $("h1").slideToggle();
});

// Custom animations
$("button").on("click", function() {
    $("h1").animate({
        opacity: 0.5,
    });
});
$("button").on("click", function() {
    $("h1").animate({
        opacity: 0.5,
        margin: "20px",
    });
});
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5,
        margin: "20px",
    });
});