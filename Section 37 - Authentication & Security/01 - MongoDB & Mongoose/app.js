import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
import mongoose from "mongoose";
import encrypt from "mongoose-encryption";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

console.log(process.env.SECRET);

userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

app.get("/", async function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
})

app.post("/register", async function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })

    await newUser.save();
    res.render("secrets");
});

app.post("/login", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const inputPassword = await User.findOne({email: username})

    if (inputPassword === password) {
        res.render("secrets");
    } else {
        res.render("login");
    }
});