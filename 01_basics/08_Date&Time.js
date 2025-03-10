// Date 

let myDATE = new Date();
    // console.log(myDATE);
    // console.log(myDATE.toString());
    // console.log(myDATE.toDateString());
    // console.log(myDATE.toTimeString());
    // console.log(myDATE.toLocaleString());
    // console.log(typeof myDATE);

//let myCreateDate = new Date("2025-9-2");
let myCreateDate = new Date("02-18-2025")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


// ++++++ time stamp
//  (it is used to calculate the time taken by the user to perform the task)

let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // divison by 1000 gives time in seconds
// console.log(Math.floor(Date.now()/1000/60)); // divison by 1000 gives time in minutes
// console.log(Math.floor(Date.now()/1000/60/60)); // divison by 1000 gives time in hours
// console.log(Math.floor(Date.now()/1000/60/60/24)); // divison by 1000 gives time in days
// // why we divide by 24 ?  because 1 day = 24 hours
// console.log(Math.floor(Date.now()/1000/60/60/24/30)); // divison by 1000 gives time in months why 30 ? because 1 month = 30 days
// console.log(Math.floor(Date.now()/1000/60/60/24/365)); // divison by 1000 gives time in years

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+ 1);
// console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time ` 

newDate.toLocaleString('default', {
  weekday: 'long',
  timeZone: 'UTC',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});  // it gives the date in the format of day, month, year
console.log(newDate);




