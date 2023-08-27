// -----===== Section 18 - Advanced DOM Manipulation =====-----



// ---==== Higher Order Functions ===---
// Functions that can take another function as an input

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divid(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}



// ---==== Objects in Programming ===---

var houseCleaningName = "John";
var houseCleaningAge = 55;
var houseCleaningHoursPerWeek = 40;
var houseCleaningYearsExperience = 20;
var houseCleaningTools = ["broom", "mop", "brush"];

var houseCleaning = {
    name: "John",
    age: 55,
    hoursPerWeek: 40,
    yearsExperience: 20,
    cleaningTools: ["broom", "mop", "brush"],
};

console.log(houseCleaning);
console.log(houseCleaning.name);



// ---==== Constructor Functions ===---

function HouseCleaning(name, age, hoursPerWeek, yearsExperience, cleaningTools) {
    this.name = name;
    this.age = age;
    this.hours = name;
    this.name = name;
    this.name = name;
}

var houseCleaner1 = new HouseCleaning("John", 55, 40, 20, ["broom", "mop", "brush"]);



// ---==== Method ===---

function HouseCleaning(name, age, hoursPerWeek, yearsExperience, cleaningTools) {
    this.name = name;
    this.age = age;
    this.hours = name;
    this.name = name;
    this.name = name;
    this.clean = function() {
        alert("Cleaning in progress...");
    }
}

var houseCleaner1 = new HouseCleaning("John", 55, 40, 20, ["broom", "mop", "brush"]);
houseCleaner1.clean();



// ---==== Callbacks ===---

function anotherAddEventListener (typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event) {
    console.log(event);
});

debugger;
document.addEventListener("keypress", function(event) {
    console.log(event);
});