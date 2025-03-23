// if 
const temperature = 41 
// if(temperature < 50){
//   console.log("less than 50 ");
// }
// console.log("temperature is greater than 50")
// conditionals - >, < , =<,>= , ==(checking equality), != , ===(checks datatype), !==(checks -ve sign),
if(temperature === 40){
  //console.log("less than 50 ");
}else{
  // console.log("temperature is greater than 50")
}

// const score = 200
// if(score>100){
//   power : "fly"
//   console.log(`user power: ${power}`);
// }
// console.log(`user power:${power}`);

// const balance = 1000

// if(balance >500) console.log("test"), // implicit scope(maan liya scope h)
// console.log("test2"); 

// if(balance < 500){
//   console.log("less than 500");
// } else if(balance < 750){
//   console.log("less than 750");
// } else if(balance < 900){
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
  
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard ){
  console.log(" Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("user logged in");
}