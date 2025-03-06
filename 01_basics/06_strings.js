const name = "abhi"
const repocount = 100
// console.log(name + repocount + " hola");

// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('abhinoo');
//console.log(gamename[0]);
//console.log(gamename.__proto__);

//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//console.log(gamename.charAt(4));
// console.log(gamename.indexOf('i'));

const newString = gamename.substring(0,3)
console.log(newString); // substring takes values from 0 only and not negative values

const anotherString = gamename.slice(-6,3)
console.log(anotherString); // slice can take negative values

const newString1 = "  abhinoo  ";
console.log(newString1.trim()); // trims the whitespaces

const url  = "https://abhinav.com/abhinav%20dwivedi";
console.log(url.replace('%20','-')) // replaces the %20 with -

console.log(url.includes('abhinav'))  // checks if the string includes the word abhinav
