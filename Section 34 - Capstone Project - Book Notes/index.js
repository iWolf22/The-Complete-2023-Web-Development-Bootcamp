import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const db = new pg.Client({
	user: "postgres",
	host: "localhost",
	database: "booknotes",
	password: "password1234",
	port: 5432,
});

db.connect();

const app = express();
const port = 3000;

var currentPage = "Home";
var searchInfo;
var page;
var currentBook;
var catalog;
var bookAction;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

	if (currentPage === "Catalog" || currentPage === "Home") {
		catalog = await db.query("SELECT id, title, author, publish, read, notes, score, cover FROM books;");
		catalog = catalog.rows;
	}

	res.render("index.ejs", {
		currentPage: currentPage,
		searchInfo: searchInfo,
		page: page,
		currentBook: currentBook,
		catalog: catalog,
	});
});

app.post("/nav", async (req, res) => {
	currentPage = req.body.nav;
	res.redirect("/");
});

app.post("/addBook", async (req, res) => {
	currentPage = "New Book";

	searchInfo = await axios.get("https://openlibrary.org/search.json?q=" + req.body.newBook.replaceAll(" ","+") + "&fields=key,title,author_name,editions,cover_i,first_publish_year");
	currentPage = "Search Page";
	page = 1;

	res.redirect("/");
});

app.post("/arrows", async (req, res) => {
	if (req.body.arrow === "»") {
		page += 1;
	}
	else {
		page -= 1;
	}
	if (page === 0) {
		page = Math.ceil(searchInfo.data.numFound / 5);
	}
	if (page === Math.ceil(searchInfo.data.numFound / 5) + 1) {
		page = 1;
	}

	res.redirect("/");
});

app.post("/bookRequest", (req, res) => {
	currentPage = "Edit Page";
	currentBook = req.body.bookId;
	bookAction = "Create";
	res.redirect("/");
});

app.post("/finalBookData", (req, res) => {
	currentPage = "Catalog";

	var databaseList = [req.body.bookTitle, req.body.bookAuthor, req.body.publishDate, req.body.dateRead, req.body.bookNotes, req.body.bookScore];
	var altText = ["Unknown Title", "Unknown Author", "XXXX", "MM-DD-YYYY", "Unknown Notes", "XX.X"];
	for (let i = 0; i < databaseList.length; i++) {
		if (databaseList[i] === "") {
			databaseList[i] = altText[i];
		}
	}

	try {
		var picture = searchInfo.data.docs[bookId].cover_i;
	}
	catch(err) {
		var picture = "https://covers.openlibrary.org/b/id/" + searchInfo.data.docs[currentBook].cover_i + "-L.jpg";
	}

	if (bookAction === "Create") {
		db.query("INSERT INTO books (title, author, publish, read, notes, score, cover) VALUES ('" + databaseList[0].replaceAll("'", "''") + "', '" + databaseList[1].replaceAll("'", "''") + "', '" + databaseList[2].replaceAll("'", "''") + "', '" + databaseList[3].replaceAll("'", "''") + "', '" + databaseList[4].replaceAll("'", "''") + "', '" + databaseList[5].replaceAll("'", "''") + "', '" + picture + "');");
	}
	else {
		db.query("UPDATE books SET title = '" + databaseList[0].replaceAll("'", "''") + "', author = '" + databaseList[1].replaceAll("'", "''") + "', publish = '" + databaseList[2].replaceAll("'", "''") + "', read = '" + databaseList[3].replaceAll("'", "''") + "', notes = '" + databaseList[4].replaceAll("'", "''") + "', score = '" + databaseList[5].replaceAll("'", "''") + "', cover = '" + picture + "' WHERE id = " + bookAction + ";");
	}

	res.redirect("/");
});

app.post("/bookActions", async (req, res) => {

	if (req.body.buttonType === "Delete") {
		db.query("DELETE FROM books WHERE id=" + req.body.actionId + ";");
	}
	else {
		currentBook = 0;
		catalog = await db.query("SELECT id, title, author, publish, read, notes, score, cover FROM books WHERE id=" + req.body.actionId + ";");
		searchInfo = {
			data: {
				docs: [{
					title: catalog.rows[0].title,
					author_name: [catalog.rows[0].author],
					first_publish_year: catalog.rows[0].publish,
					cover_i: catalog.rows[0].cover.replaceAll("https://covers.openlibrary.org/b/id/", "").replaceAll("-L.jpg", ""),
					read: catalog.rows[0].read,
					notes: catalog.rows[0].notes,
					score: catalog.rows[0].score,
				}]
			}
		}
		if (req.body.buttonType === "Edit") {
			currentPage = "Edit Page";
			bookAction = catalog.rows[0].id;
		}
		else {
			currentPage = "View";
		}
	}

	res.redirect("/");
});


app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
