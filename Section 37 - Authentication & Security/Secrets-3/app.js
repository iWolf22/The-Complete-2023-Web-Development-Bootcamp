import express from "express";
import bodyParser from "body-parser";
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
import mongoose from "mongoose"; 
import bcrypt from "bcrypt"; 

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const saltRounds = 10;

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

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

    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
    
        await newUser.save();
        res.render("secrets");
    });

});

app.post("/login", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const inputPassword = await User.findOne({email: username});

    bcrypt.compare(password, inputPassword.password, function(err, result) {
        if (result === true) {
            res.render("secrets");
        } else {
            res.render("login");
        }
    });
});