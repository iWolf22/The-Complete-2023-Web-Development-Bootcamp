import { io } from "socket.io-client";

const joinRoomButton = document.getElementById("room-button");
const sendMessageButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const from = document.getElementById("form");

const socket = io("http://localhost:3000");
// socket.io("test", () => {
//     console.log("You connected with id: " + socket.id);
//     displayMessage("You connected with id: " + socket.id);
// });

from.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;

    if (message === "") return;
    displayMessage(message);

    messageInput.value = "";
});

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value;
});

function displayMessage(message) {
    const div = document.createElement("div");
    div.textContent = message;
    document.getElementById("message-container").append(div);
}
