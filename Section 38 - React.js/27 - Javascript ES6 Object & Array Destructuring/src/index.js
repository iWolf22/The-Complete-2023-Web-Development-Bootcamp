// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";
// import animals, { useAnimals } from "./data.js";

// Destructuring Arrays
// const [cat, dog] = animals;

// Destructuring Objects
// const { name, sound } = cat;
// const { name: catName, sound: catSound } = cat;
// const { name="Flyffy", sound="Purr" } = cat;
// const { feedingRequirements: {food, water} } = cat;

// How useState Works
// console.log(useAnimals(cat));
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

var [tesla, honda] = cars;
var {
  speedStats: { teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;
var {
  speedStats: { hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
