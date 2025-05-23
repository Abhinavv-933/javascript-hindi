// promises are object in js
const promiseOne = new Promise(function(resolve,reject){
  // do an async task;
  // DB calls, cryptography , network
  setTimeout(function() {
 //   console.log('Async task is complete');
    resolve()// if we dont use resolve then resolve wont get initiated 
    // as resolve & (.then) wont get connected w/o using resolve() method ko call krna pdega using .then
  }, 1000);
})

promiseOne.then(function(){
 // console.log("promise consumed"); 
})

new Promise((resolve, reject) => {
  setTimeout(function(){
  //  console.log("async task 2");
    resolve()
  },1000)
}).then(function(){ // another way to do
 // console.log('async task 2 resolved');
  
})

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"thorfinn",work:"student"})
  })
},1000)

promiseThree.then(function(user){
  console.log(user)
})// basic how data consumption works nd values kaise aati h

//then & catch

const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"abhi",work:"dev"})
    }else{
      reject('ERROR:Something went wrong')
    }
  })
},1000)

promiseFour
  .then((user) => {   // chaining method 
  console.log(username);
  return user.username
}).then((username) =>{
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"))
// finalluy will print whether resolved or rejcted

//.then k jgh async await v use hota h kai jgh
//async await directly problems ko handle nhi kr skte h 

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"abhi",work:"dev"})
    }else{
      reject('ERROR:Something went wrong')
    }
  },1000)
});

async function consumePromiseFive(){
  try{
    const response = await promiseFive
    console.log(Response);
  }catch(error){
    console.log(error);
  }
}

consumePromiseFive();


//to convert data from strings to json we use await too

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }
//getAllUsers()


//sam prblm using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})