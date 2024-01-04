var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

var newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

newNumbers = numbers.filter(function (num) {
  return num < 10;
});

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

newNumbers = numbers.reduce(function (acc, num) {
  console.log("Acc = " + acc);
  console.log("Num = " + num);
  return acc + num;
});

console.log(newNumbers);

//Find - find the first item that matches from an array.

newNumbers = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});

import emojipedia from "./emojipedia.js";

console.log(
  emojipedia.map(function (index) {
    return index.meaning.slice(0, 100);
  })
);
