import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "password1234",
  port: 5432,
});

db.connect();

async function checkVisisted() {
  var countries = await db.query("SELECT country_code FROM visited_countries;");
  return countries.rows;
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  res.render("index.ejs", { countries: await checkVisisted(), text: "Enter country name" });
});

app.post("/add", async (req, res) => {


  var countryCode = await db.query("SELECT country_code FROM countries WHERE '" + req.body["country"] + "' = country_name;");

  if (countryCode.rowCount !== 0) {
    var tempCountry = await db.query("SELECT country_code FROM visited_countries WHERE '" + countryCode.rows[0].country_code + "' = country_code;");
    if (tempCountry.rowCount == 0) {
      db.query("INSERT INTO visited_countries (country_code) VALUES ('" + countryCode.rows[0].country_code + "');");
    }
    else {
      res.render("index.ejs", { countries: await checkVisisted(), text: 'Country already added, try adding another!'  });
    }
  }
  else {
    res.render("index.ejs", { countries: await checkVisisted(), text: "Country doesn't exist, try adding a real one!"  });
  }

  res.render("index.ejs", { countries: await checkVisisted(), text: 'Enter country name' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
