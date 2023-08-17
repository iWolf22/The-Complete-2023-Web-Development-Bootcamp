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