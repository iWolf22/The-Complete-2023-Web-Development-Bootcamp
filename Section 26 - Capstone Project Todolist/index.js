import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let data = {
        updateList: todoList
    };
  res.render("index.ejs", data);
});

app.post("/add-item", (req, res) => {
    if (req.body["newItem"] !== "") {
        todoList.push([req.body["newItem"], new Date().toString().slice(0, 25)]);
    }
    
    let data = {
        updateList: todoList
    };
    res.render("index.ejs", data);
});

app.post("/delete-item", (req, res) => {
    todoList.splice(req.body["deleteItem"], 1);

    let data = {
        updateList: todoList
    };

    res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

var todoList = [];