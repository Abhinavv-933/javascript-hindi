const userEmail = []

if (userEmail) {
  //console.log("got user email");
  
} else {
  //console.log("done have user email");
}

// falsy values(values assumed as false)

// false ,0,-0 , BigInt 0n, "", null, undefined,NaN

// truthy values(assumed as truth)
//"0", 'false' , " ", [],{}, function(){}
// (anything inside an string is truthy value)

//            checking array is empty or not
// if(userEmail.length === 0){
//   console.log("Array is empty");
// }

// const emptyObject={}
// if (Object.keys(emptyObject).length === 0) {
//   console.log("object is empty");
// }

// false ==0 (true)
// false ==""(true)
// 0 == ''(true)

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);
// val1 = null ?? 10
// console.log(val1);
// val1 = undefined ?? 15
// console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);


// terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

