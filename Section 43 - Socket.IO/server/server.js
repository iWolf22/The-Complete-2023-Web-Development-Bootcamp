const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:8080", "http://localhost:8081"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
});
