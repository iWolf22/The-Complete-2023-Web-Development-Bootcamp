import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import { default as mongodb } from 'mongodb';
let MongoClient = mongodb.MongoClient;
import mongoose from "mongoose";
import ejs from "ejs";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as GitHubStrategy } from "passport-github";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB");

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    facebookId: String,
    githubId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id, email: profile.displayName, password:"Google OAuth" }, function (err, user) {
            return cb(err, user);
        });
    } 
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/secrets",
    enableProof: true
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id, email: profile.displayName, password:"Facebook OAuth"  }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/secrets"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ githubId: profile.id, email: profile.displayName, password:"GitHub OAuth" }, function (err, user) {
            return cb(err, user);
        });
    }
));

app.get("/", async function(req, res) {
    res.render("home");
});

app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"]})
);

app.get("/auth/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
        res.redirect("/secrets");
    }
);

app.get("/auth/facebook",
    passport.authenticate("facebook")
);

app.get("/auth/facebook/secrets",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    function(req, res) {
        res.redirect("/secrets");
    }
);

app.get("/auth/github",
    passport.authenticate("github")
);

app.get("/auth/github/secrets", 
    passport.authenticate("github", { failureRedirect: "/login" }),
    function(req, res) {
        res.redirect("/secrets");
    }
);


app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});

app.get("/secrets", async function(req, res) {
    if (req.isAuthenticated()) {

        var findResult = await User.find({"secret": {$ne: null}});

        console.log(findResult);

        res.render("secrets", {userWithSecrets: findResult});
    } else {
        res.redirect("/login");
    }
});

app.post("/register", async function(req, res) {

    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
});

app.post("/login", async function(req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    })
});

app.get("/logout", function(req, res) {
    req.logout(function() {});
    res.redirect("/");
});

app.get("/submit", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});

app.post("/submit", async function(req, res) {
    const submittedSecret = req.body.secret;

    console.log(req.user._id);

    var foundUser = await User.findById(req.user._id.toString());

    foundUser.secret = submittedSecret;
    foundUser.save();
    res.redirect("/secrets");

});