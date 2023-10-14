import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "JoshuaD1234";
const yourPassword = "JoshuaD1234";
const yourAPIKey = "5e6b0f9e-10b7-425f-9759-c7967102eef4";
const yourBearerToken = "58fc48ed-c4d8-44cc-8251-2d66a4ad69b6";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  var response1 = await axios.get("https://secrets-api.appbrewery.com/random");

  console.log(response1.data);
  res.render("index.ejs", {
    content: JSON.stringify(response1.data)
  });

});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  var response2 = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });

    console.log(response2.data);
    res.render("index.ejs", {
      content: JSON.stringify(response2.data)
    });

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  var response3 = await axios.get("https://secrets-api.appbrewery.com/filter?score=5&apiKey=" + yourAPIKey);

  console.log(response3.data);
  res.render("index.ejs", {
    content: JSON.stringify(response3.data)
  });

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  var response4 = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
    headers: { 
      Authorization: `Bearer ` + yourBearerToken, 
    },
  });

  console.log(response4.data);
  res.render("index.ejs", {
    content: JSON.stringify(response4.data)
  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
