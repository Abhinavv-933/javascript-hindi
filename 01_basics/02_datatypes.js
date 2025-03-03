"use strict"; // treat all JS code as newer version
alert("Hello, World!"); // alert is a function that displays a message in a dialog box
// Different data types in JavaScript

// String
let name = "John Doe";

// Number
let age = 30;

// Boolean
let isStudent = false;

// Undefined
let address;

// Null
let car = null;

// Symbol
let sym = Symbol('unique');

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // undefined
console.log(typeof car); // object (null is considered an object in JavaScript)
console.log(typeof sym); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof person); // object
