import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const APIKEY = "870d02033f36d526eb7dd262f25702a5"
var latitude = 44.34;
var longitude = 10.99;
var data;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    data = {
        currentScreen: "screen1",
        cityName: "City Name"
    }
    
    res.render("index.ejs", data);
});


app.post("/submitCity", (req, res) => {

    console.log(req.body["cityName"]);

    var possibleCityList = [];

    for (var i = 0; i < cityList.length; i++) {
        if (cityList[i][0].toLowerCase() === req.body["cityName"].toLowerCase().replace(/ /g, '')) {
            possibleCityList.push(cityList[i]);
            possibleCityList[possibleCityList.length - 1].push(i);
        }
    }

    data = {
        currentScreen: "screen2",
        cityName: req.body["cityName"],
        cityList: possibleCityList
    }

    console.log(possibleCityList);

    res.render("index.ejs", data);
});

  app.post("/selectCity", async (req, res) => {

    var response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + cityList[req.body["cityID"]][3] + "&lon=" + cityList[req.body["cityID"]][4] + "&appid=" + APIKEY);
    console.log(response.data);

    data = {
        currentScreen: "screen3",
        cityName: cityList[req.body["cityID"]][0],
        provinceName: cityList[req.body["cityID"]][2],
        countryName: cityList[req.body["cityID"]][1],
        cityData: response.data
    }

    res.render("index.ejs", data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});