// array 

const myArr = [1,2,3,4,5,6]
//console.log(myArr[3])
const heroes = ["spidy","antman","ironman"]

const myArr2 = new Array(1,2,3,4,5)
//console.log(myArr2[2]);

// Array methods

myArr.push(7)
//console.log(myArr)

// myArr.push()
// myArr.pop()

// myArr.unshift(8) ; // it adds 8 to the first position of array nd displacing others
// myArr.shift() ; //it simply removes the first element

// console.log(myArr.includes(8));// it is simply a boolean telling t/f 
// console.log(myArr.indexOf(2))

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice , splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

// the diff bw slice nd splice is that splice manipulates the original array by removing them from array while slice do not manipulate array

// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

