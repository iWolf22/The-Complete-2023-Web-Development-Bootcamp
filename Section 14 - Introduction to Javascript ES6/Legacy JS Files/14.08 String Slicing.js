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

// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.