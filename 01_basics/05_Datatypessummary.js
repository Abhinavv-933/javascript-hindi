// primitive datatypes
// 7 types : string, number, boolean, null, undefined, symbol, bigint

// js is dynamic language
// data types are automatically assigned to variables
const score=200
const scorevalue=200.45
const isloggedin=true
let userEmail;
// symbol is used for unique value
const id = Symbol('id');
const anotherid = Symbol('id');
console.log(id === anotherid); // false because both are different symbols

// BigInt
const bigNumber = 128901234567567890n;

// non-primitive datatypes(reference datatypes)
// array, object, function


const heroes = ["Superman","Batman","Wonder"];
console.log(typeof heroes); // object

let myobj = {
    name: "harry",
    age: 28
}

const myfunction = function(){
    console.log("hello world");
}
// console.log(myfunction); // function
// console.log(typeof myfunction); // function

// non-primitve datatypes return type is object
// arrays are objects in js


//return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
//  BigInt  =>  bigint

//   2) Non-primitive Datatypes
//   Arrays  =>  object
//   Function  =>  function
//   Object  =>  object







// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack and heap memory in js
// STACK (primitives)  , HEAP (non-primitives)

let ytchannel = "CodeWithHarry";
let ytchannel2 = ytchannel;
ytchannel2 = "abhinav";

console.log(ytchannel);
console.log(ytchannel2);

let user1 = {
   email: "yoyo@gmail.com",
   upi: "yoyo@upi"
}
let user2 = user1;
user2.email = "abhinoob@gmail.com"

console.log(user1.email);
console.log(user2.email);
