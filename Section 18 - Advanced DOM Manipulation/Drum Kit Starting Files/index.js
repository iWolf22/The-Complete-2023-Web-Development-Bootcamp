for (var i = 0; i < document.querySelectorAll(".set .drum, button").length; i++) {
    document.querySelectorAll(".set .drum, button")[i].addEventListener("click", function() {
        playSound(this.innerHTML);
    });
}

addEventListener("keypress", function(event) {
    playSound(event.key);
});

var soundVar = [
    ["w", "sounds/tom-1.mp3"],
    ["a", "sounds/tom-2.mp3"],
    ["s", "sounds/tom-3.mp3"],
    ["d", "sounds/tom-4.mp3"],
    ["j", "sounds/snare.mp3"],
    ["k", "sounds/crash.mp3"],
    ["l", "sounds/kick-bass.mp3"]
];

function playSound(character) {

    var activeButton = document.querySelector("." + character);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

    for (var i = 0; i < soundVar.length; i++) {
        if (soundVar[i][0] === character) {
            var audio = new Audio(soundVar[i][1]);
            audio.play();
            break;
        }
    }
}