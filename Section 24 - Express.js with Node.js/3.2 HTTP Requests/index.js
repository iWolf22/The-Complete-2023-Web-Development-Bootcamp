import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><hr/><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><hr/><p>My name is Joshua Dierickse</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><hr/><p>Contact me at joshua.dierickse@gmail.com</p>");
})

app.listen(port, () => {
    console.log("Server running on port " + port + ".");
})