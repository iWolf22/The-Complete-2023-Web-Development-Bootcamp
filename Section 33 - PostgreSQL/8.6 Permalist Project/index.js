import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "password1234",
  port: 5432,
});
db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  var todo = await db.query("SELECT * FROM items;");
  console.log(todo.rows);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: todo.rows,
  });
});

app.post("/add", async (req, res) => {
  console.log("INSERT INTO items (title) VALUES ('" + req.body.newItem + "');");
  await db.query("INSERT INTO items (title) VALUES ('" + req.body.newItem + "');");
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  console.log("UPDATE items SET title = '" + req.body.updatedItemTitle + "' WHERE id = " + req.body.updatedItemId + ";");
  await db.query("UPDATE items SET title = '" + req.body.updatedItemTitle + "' WHERE id = " + req.body.updatedItemId + ";");
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  console.log("DELETE FROM items WHERE id = " + req.body.deleteItemId + ";");
  await db.query("DELETE FROM items WHERE id = " + req.body.deleteItemId + ";");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
