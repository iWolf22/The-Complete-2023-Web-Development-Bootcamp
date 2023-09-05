import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let date = new Date();
    date.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
    let finalDate = days[date];
    console.log(date)


    res.render(__dirname + "/views/index.ejs", {
        date: date
    });
});

app.listen(port, () => {
    console.log("Listening on port " + port + ".");
});