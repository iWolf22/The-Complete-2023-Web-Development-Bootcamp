/*
---=== 14.0 Introduction to Javascript ===---

History of the internet
1. Mosaic Netscapes, one of the first big internet browsers
2. Netscapes vs. Internet Explorer
3. Developer at netscapes made Javascript in 10 days

+--------------------------------------------------+----------------------------+
|                    Interpreted                   |          Complied          |
+--------------------------------------------------+----------------------------+
| Interpreted by a VM and turned into machine code | Complied into machine code |
+--------------------------------------------------+----------------------------+
*/

/*
----=== 14.1 Javascript Alerts ===--- 

Dev tools -> Console
*/

alert("Hello World!");

/*
Dev tools -> Console -> Snippets
*/

alert("Hello World!");

// Good JavaScript syntacs
//https://github.com/rwaldron/idiomatic.js/


/*
---=== Data Types ===---

1. Strings
2. Integers
3. Booleans

*/

typeof("I am a string")
typeof(22)
typeof(true)

/*
---=== Javascript Variables ===---
*/

prompt("What is your name?");
var myName = prompt("What is your name?");

//---

var myName = "Insert Name";
alert(myName);

//---

var yourName = prompt("What is your name?")
alert(yourName)

//---

var myName = "Insert my name";
var yourName = prompt("What is your name?")
alert("Hello, " + yourName + ", this is " + myName + ".")

/*
---=== Javascript Variable Exercise ===---
*/

function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

var c = a;
a = b;
b = c;
    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

/*
---=== Javascript Conventions ===---
*/

// Ctrl reload to hard reload

// Camel Cassing

var myNameVariable = "joshuaDierickse"

/*
---=== String Concatenation ===---
*/

alert("hello" + " " + "word")

var message = "Hello"
var name = "You"

alert(message + ", " + name + "!")

/*
---=== String Length ===---
*/

var name = "Hello World";
console.log(name.length);

var tweet = prompt("What would you like to Tweet? (Keep it under 280 Characters)");
alert("Your tweet is " + (tweet.length) + " characters which is " + (280 - tweet.length) + " from the limit.")

/*
---=== String Slicing ===---
*/

// slice(x, y)

var name = "Hello World";
name.slice(0,1);
name.slice(5,6);
name.slice(1,5);

// ---

var tweet = prompt("What would you like to Tweet? (Keep it under 280 Characters)");
tweet = tweet.slice(0, 140)
alert(tweet)

alert(prompt("What would you like to Tweet?").slice(0,140))

/*
---=== String Cases ===---
*/

var word = "Hello World!";
alert(word);
word = word.toUpperCase();
alert(word);
word = word.toLowerCase();
alert(word);

//---

var name = prompt("What is your name?")
name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
alert("Reformatted name: " + name + "!")

//---

/*
---=== Basic Arithmetic ===---
*/

var dogAge = prompt("What is your dog's age?")

alert("Your dog's age is " + ((dogAge - 2) * 4 + 21))

/*
---=== Increment and Decrement ===---
*/

var x = 0;

x = x + 1;
x = x - 1;

x = x++;
x = x--;

x += 1;
x -= 1;

/*
---=== Functions ===---
*/

function getMilk() {
    alert("Step 1");
    alert("Step 2");
    alert("Step 3");
    alert("Step 4");
    alert("Step 5");
}

getMilk();

function getMilkConsole() {
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 4");
    console.log("Step 5");
}

getMilkConsole();

/*
---=== Functions 2 ===---
*/


function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Buy " + bottles + " bottle(s) of milk!")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    var cost = bottles * 1.5;
}

function getMilk(money) {   
    console.log("You can by " + Math.floor(money / 1.5) + " bottles of milk!");
    console.log("You will have " + (money % 1.5) + " dollars left!")
}

getMilk(10);

/*
---=== Life in a Week ===---
*/

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        console.log("You have " + (90 * 365 - age * 365) + " days, " + (90 * 52 - age * 52) + " weeks, and " + (90 * 12 -age * 12) + " months left.")
        
    /*************Don't change the code below**********/
}

/*
---=== Functions 3 ===---
*/

function getMilk(money, costPerBottle) {   
    console.log("You can by " + Math.floor(money / costPerBottle) + " bottles of milk!");
    console.log("You will have " + (money % costPerBottle) + " dollars left!");
    return money % costPerBottle;
}   

var change = getMilk(10, 1.5);

/*
---=== BMI Calculator ===---
*/

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    console.log(weight / Math.pow(height, 2));
    return(weight / Math.pow(height, 2));
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var bmi = bmiCalculator(65, 1.8); 