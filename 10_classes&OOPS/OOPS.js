// const user = {
//   username: "Abhinav",
//   loginCount: 8,
//   signedIn : true,

//   getUserDetails: function(){
//     console.log("got user details from DB");
//     console.log(`Username: ${this.username}`);    
//     // if we use only this then it will give each value  
//   }

// }

// console.log(user.username);
// console.log(user.getUserDetails());
  //console.log(this);
  // in global contxt this keyword will return empty {}

// constructor function
function user(username,loginCount,isloggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn;
   

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
  }  
  return this
}
 const userOne = new user("abhi",12,true)
 const userTwo = new user("chaiAurCode",11,false)
 console.log(userOne.constructor);
// console.log(userTwo);
// new keyword creates an empty object called instance
// constructor property is nothing but reference bout itself only



   