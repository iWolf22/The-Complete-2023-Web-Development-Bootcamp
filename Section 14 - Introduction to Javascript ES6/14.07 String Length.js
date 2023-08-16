/*
---=== String Length ===---
*/

var name = "Hello World";
console.log(name.length);

var tweet = prompt("What would you like to Tweet? (Keep it under 280 Characters)");
alert("Your tweet is " + (tweet.length) + " characters which is " + (280 - tweet.length) + " from the limit.")