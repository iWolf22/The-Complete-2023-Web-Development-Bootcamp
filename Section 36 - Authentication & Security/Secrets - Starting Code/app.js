import express from "express";
import bodyParser from "body-parser";
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
import mongoose from "mongoose";
import encrypt from "mongoose-encrytion";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const uri = "mongodb+srv://JoshuaDierickse:K6fxhtWEiYNWpOQD@note-tuts.fm5iq0c.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

const userSchema = {
    email: String,
    password: String
};

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

app.post("/register", function(req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    })

    newUser.save();
    res.render("secrets");
});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username})
    .then((docs)=>{
        if (docs.password === password) {
            res.render("secrets");
        } else {
            res.render("login");
        }
    })
    .catch((err)=>{
        console.log(err);
    });
})