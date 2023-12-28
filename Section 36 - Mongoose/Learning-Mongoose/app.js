const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

/*

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "Green is the best color."
});

const orange = new Fruit({
    name: "Orange",
    rating: 9,
    review: "Good vitamin C."
});

Fruit.insertMany([kiwi, orange, apple]);

*/


const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema

});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37,
});

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Spikey"
});

const newPerson = new Person({
    name: "Amy",
    score: 9,
    favouriteFruit: pineapple
});

newPerson.save();

/*

async function temp() {

    for (let i = 0; i < 10; i++) {
        await person.save();
    }

    await Person.deleteMany({name: 'John'});

    mongoose.connection.close();
}

temp();
*/


/*
async function temp() {
    var temp = await Fruit.find();
    for (let i = 0; i < temp.length; i++) {
        console.log(temp[i].name);
    }


    //await Fruit.updateOne({_id: "658cb0664ac56c897afda5bd"}, {name: "Peach"});

    await Fruit.deleteOne({_id: "658cb0664ac56c897afda5bd"});

    mongoose.connection.close();
}

temp();
*/