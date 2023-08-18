/*
----=== Math Random ===--- 
*/

var num = Math.floor(Math.random() * 6) + 1;
console.log(num)

// Pseudo number generator
// 16 decimal places

/*
----=== Love Calculator ===--- 
*/

var name1 = prompt("Love Calculator: Enter the first name!")
var name2 = prompt("Love Calculator: Enter the second name!")
alert("Love Calculator: " + name1 + " and " + name2 + " have a " + (Math.floor(Math.random() * 100) + 1) + "% chance of finding love!")

/*
----=== If Statements and Control Flow ===--- 
*/

if (track === "clear") {
    goStraight();
}
else {
    turnRight();
}

/*
----=== New Love Calculator ===--- 
*/

var name1 = prompt("Love Calculator: Enter the first name!");
var name2 = prompt("Love Calculator: Enter the second name!");
var loveScore = Math.floor(Math.random() * 100);

if (loveScore > 50)
    alert("Love Calculator: " + name1 + " and " + name2 + " have a " + loveScore + "% chance of finding love (Which is above average)!")
else {
    alert("Love Calculator: " + name1 + " and " + name2 + " have a " + loveScore + "% chance of finding love (Which is below average)!")
}

/*
----=== Comparators ===--- 
*/

// === Is equals
// !== Not equals
// > greator than
// < less than
// >= greator than equals
// <= less than equals

// === cares about the data types
// == doesn't care about the data types

/*
----=== Combining Comparators ===--- 
*/

// && and
// || or

/*
----=== New Love Calculator ===--- 
*/

var name1 = prompt("Love Calculator: Enter the first name!");
var name2 = prompt("Love Calculator: Enter the second name!");
var loveScore = Math.floor(Math.random() * 100);

if (loveScore >= 70)
    alert("Love Calculator: " + name1 + " and " + name2 + " have a " + loveScore + "% chance of finding love (Above 70%)!")
else if (loveScore < 70 && loveScore > 30)
    alert("Love Calculator: " + name1 + " and " + name2 + " have a " + loveScore + "% chance of finding love (Between 30% and 70%)!")
else {
    alert("Love Calculator: " + name1 + " and " + name2 + " have a " + loveScore + "% chance of finding love (Which is below average)!")
}

/*
----=== BMI Calculator Challenge ===--- 
*/

function bmiCalculator (weight, height) {
    
    var bmi = weight / Math.pow(height, 2);
    
    if (bmi < 18.5) {
        var interpretation = ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        var interpretation = ", so you have a normal weight.";
    }
    else {
        var interpretation = ", so you are overweight.";
    }
    
    var interpretation = "Your BMI is " + bmi + interpretation;
    
    return interpretation;
}

/*
----=== Leap Year Challenge ===--- 
*/

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
        if (year % 400 === 0) {
            return "Leap year.";
        }
        else if (year % 100 === 0) {
            return "Not leap year."
        }
        else if (year % 4 === 0) {
            return "Leap year."
        }
        else {
            return "Not leap year."
        }
        
    
    /**************Don't change the code below****************/    
    
    }

/*
----=== Arrays ===--- 
*/

var guestList = ["Angela", "Jack", "Tom", "Bob", "Rick", "Rob"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName) === true) {
    alert("Welcome :)");
}
else {
    alert("Not Welcome :(");
}

/*
----=== Intermediate Arrays ===--- 
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz Buzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}

var array = [];
array.push("1");
array.push("2");
array.push("3");
array.push("4");
array.push("5");
array.pop();
array.pop();
array.pop();

/*
----=== Intermediate Arrays ===--- 
*/

var output = [];

function fizzBuzz() {
    output.push(output[-1] + 1);
    console.log(output);
}

/*
----=== Who is Buying Lunch ===--- 
*/

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var randomNum = Math.floor(Math.random() * names.length);
        return names[randomNum] + " is going to buy lunch today!"
        
        
    
    
    /******Don't change the code below*******/    
    }

/*
----=== While Loops ===--- 
*/

var i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

function fizzBuzz() {

    i = 1;
    var fizzBuzzArray = [];

    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push("Fizz Buzz");
        }
        else if (i % 3 === 0) {
            fizzBuzzArray.push("Fizz");
        }
        else if (i % 5 === 0) {
            fizzBuzzArray.push("Buzz");
        }
        else {
            fizzBuzzArray.push(i);
        }
        i++;
    }
    
    console.log(fizzBuzzArray);
}

function bottleOfBeer(numBottles) {
    while (numBottles >= 1) {
        console.log(numBottles + " bottles of bear on the wall, " + numBottles + " bottles of beer.");
        console.log("Take one down and passit arround, " + (numBottles - 1) + " bottles of beer on the wall.");
        numBottles--;
    }
}

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        if (n === 1) {
            var array = [0];
            return array;
        }

        var array = [0, 1];
        
        for (var i = 0; i < n - 2; i++) {
            array.push(array[i] + array[i + 1]);
        }
        
        return array;
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    