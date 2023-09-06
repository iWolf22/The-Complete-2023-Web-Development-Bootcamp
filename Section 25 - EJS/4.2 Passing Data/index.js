import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let data = {
    header: "Enter your name below 👇" 
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  let data = {
    header: "There are " + (req.body["fName"].length + req.body["lName"].length) + " letters in the name " + req.body["fName"] + " " + req.body["lName"]
  }
  res.render("index.ejs", data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
