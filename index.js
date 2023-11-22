// const superHero = require("./super-hero.js")

// console.log(superHero.getName());

// superHero.setName("Superman")
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero.js");
// console.log(newSuperHero.getName());
const SuperHero = require("./super-hero");
const superman = new SuperHero("Superman")
console.log(superman.getName());
const batman = new SuperHero("Batman")
console.log(batman.getName());
