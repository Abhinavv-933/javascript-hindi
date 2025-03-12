const marvel_heroes = ["spidy","antman","ironman"]
const DC_heroes = ["batman","superman","flash"]

// marvel_heroes.push(DC_heroes)

// console.log(marvel_heroes); // it will add the DC_heroes array to the last of marvel_heroes array as a single element
// console.log(marvel_heroes[3][1]); // it will print superman

const allheroes = marvel_heroes.concat(DC_heroes)
// console.log(allheroes); // it will concatenate the two arrays means simply add the two arrays

const allnewheroes = [...marvel_heroes,...DC_heroes] // it is a new way to concatenate the two arrays known as spread operator(spread just like how a broken glass spreads)
// console.log(allnewheroes); // it will concatenate the two arrays means simply add the two arrays

const real_another_array = [1,2,3,[4,5,6],7,[2,4,[5,6]]]
//console.log(real_another_array.flat(Infinity)); // it will convert the nested array into a single array

Array.isArray("abhinav")
// console.log(Array.isArray("Abhinav")); // it will return false as it is not an array
// console.log(Array.from("Abhinav")); // it will convert the string into an array of characters
 
// important interview question--
// console.log(Array.from({name: "abhinav"})) // it will return empty array because instruction is unclear like whether to make array of keys or values 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
// it returns an array of the given elements

