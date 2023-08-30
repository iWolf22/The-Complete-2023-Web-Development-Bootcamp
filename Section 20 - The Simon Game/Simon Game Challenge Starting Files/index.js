let clickList = [];
let currentIndex = 0;
const colorList = ["green", "red", "yellow", "blue"];

$(".container .row div#green").click(function() {
    boxClick("green");

});

$(".container .row div#red").click(function() {
    boxClick("red");
});

$(".container .row div#yellow").click(function() {
    boxClick("yellow");
});

$(".container .row div#blue").click(function() {
    boxClick("blue");
});

$("html").keypress(function(event) {
    if (event.key == " ") {
        if (clickList.length === 0) {
            addLevel();
        }
    }
});

function boxClick(color) {

    clickAnimation(color);
    if (clickList[currentIndex] === color) {
        currentIndex += 1;
        var audio = new Audio("./sounds/" + color + ".mp3");
        if (currentIndex === clickList.length) {
            addLevel();
        }
        $("body h2#level-title").text("Level " + clickList.length + " [" + "#".repeat(currentIndex) + "-".repeat(clickList.length - currentIndex)  + "]");
    }
    else {
        var audio = new Audio("./sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("body h2#level-title").text("GAME OVER, Press Space to Play Again!")
        clickList = [];
    }

    audio.play();
}

function addLevel() {
    setTimeout(() => {
        currentIndex = 0;
        clickList.push(colorList[Math.floor(Math.random() * 4)]);
        clickAnimation(clickList[clickList.length - 1]);
        var audio = new Audio("./sounds/" + clickList[clickList.length - 1] + ".mp3");
        audio.play();
        $("body h2#level-title").text("Level " + clickList.length + " [" + "#".repeat(currentIndex) + "-".repeat(clickList.length - currentIndex)  + "]");
    }, 1000);
}

function clickAnimation(color) {
    $(".container .row div#" + color).addClass("pressed");
    setTimeout(() => {
        $(".container .row div#" + color).removeClass("pressed");
    }, 200);
}