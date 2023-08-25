var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".container .dice .img1").setAttribute("src", "./images/dice" + player1 + ".png");
document.querySelector(".container .dice .img2").setAttribute("src", "./images/dice" + player2 + ".png");

if (player1 === player2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
}
else if (player1 > player2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
}
else {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
}