//var generateName = require("sillyname")

// import generateName  from "sillyname";

// for (let i = 0; i < 101; i++) {
//     var sillyName = generateName();
//     console.log("Silly name " + i + ": " + sillyName + ".");
// }

import superheroes from "superheroes";

for (let i = 0; i < 101; i++) {
    var superHeroName = superheroes.random()
    console.log("Superhero name " + i + ": " + superHeroName + ".");
}