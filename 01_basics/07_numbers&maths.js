const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); // it gives string value upto 2 decimal places

const otherNumber = 100.8973
//console.log(otherNumber.toPrecision(3)); // it gives precised value upto 3 decimal places

const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN')); // it gives value in us currency format



//+++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); // it gives absolute value
//console.log(Math.round(5.6)); // it gives round value
//console.log(Math.ceil(5.1)); // it gives ceil value
//console.log(Math.floor(5.9)); // it gives floor value
//console.log(Math.min(2,3,4,5,66,6,4))
//console.log(Math.max(2,3,4,5,66,6,4))

 console.log(Math.random()); // it gives random value between 0 to 1
 console.log(Math.random()*10 + 1); //
  console.log(Math.floor(Math.random()*10 + 1)); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // it gives random value between 10 to 20 so that output is min 10 or greater
