const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// express app
const app = express();
const workoutRoutes = require("./routes/workout");
const port = process.env.PORT;

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    // listen for requests
    app.listen(port, () => {
        console.log("connected to db and listening on port " + port + ".");
    });
}).catch((err) => {
    console.log(err)
});
