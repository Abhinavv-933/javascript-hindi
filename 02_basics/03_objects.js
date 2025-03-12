// singleton(literals k trh declare krte h tb singleton nhi bnta h ,constructor se bnta h  )
// object.create()


// 1. Object Literals(way to declare object)

const mysym = Symbol("mykey")
// interview question-- how to use symbols as key in object
// console.log(mysym); // it will print the symbol 


const jsuser = {
  name :"abhinav",
  age : 21,
  location : "delhi",
  [mysym] : "mykey", // to get the value of mysym key we have to use the square brackets 
  email: "abhinav@gmail.com",
  isLoggedIn : "true",
  isLoginDays : ["monday", "tuesday", "wednesday"],

}

// console.log(jsuser.isLoginDays[1])
// console.log(jsuser["email"]) // it is another way to access the object properties
// console.log(jsuser.mysym) // it will print the value of mysym key but the datatype will be string
// console.log(typeof jsuser.mysym) // it will print string
// console.log(jsuser[mysym]) // correct way to access the symbol key
// console.log(typeof jsuser[mysym]) // it will print symbol

jsuser.email ="abhinav@example.com"
jsuser.email = "abhinav@microsoft.com"
jsuser.greeting = function(){
  console.log("hello user");
}
// Object.freeze(jsuser) // it will freeze the object means we can not change the object properties
// console.log(jsuser);

// function are treated as variables in javascript
jsuser.greeting = function(){
  console.log("hello user");
}
jsuser.greeting() // we dont use console.log here because we are already using console.log in the function 
jsuser.greeting2 = function(){
  console.log(`hello jsuser, ${this.name}`);

}
jsuser.greeting2() // it will print hello jsuser, abhinav

//mostly we use . notation to access the object properties but we can also use square brackets to access the object properties
