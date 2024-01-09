const Workout = require("../models/workoutmodel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createAt: -1});

    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout!"});
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        res.status(404).json({error: "No such workout!"});
    } else {
        res.status(200).json(workout);
    }
}

// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    console.log(title, load, reps);

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout!"});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        res.status(404).json({error: "No such workout!"});
    } else {
        res.status(200).json(workout);
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout!"});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!workout) {
        res.status(404).json({error: "No such workout!"});
    } else {
        res.status(200).json(workout);
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}