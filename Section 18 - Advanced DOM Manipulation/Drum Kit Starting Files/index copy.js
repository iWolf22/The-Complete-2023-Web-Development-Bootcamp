for (var i = 0; i < document.querySelectorAll(".set .drum, button").length; i++) {
    document.querySelectorAll(".set .drum, button")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
    });
}


// The function(event) "callback function"
addEventListener("keypress", function(event) {
    playSound(event.key);
});

function playSound(character) {

    var activeButton = document.querySelector("." + character);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

    switch (character) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default:
            console.log(character);
    }
}