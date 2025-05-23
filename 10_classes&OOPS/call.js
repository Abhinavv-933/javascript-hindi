function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username,email,password){
  SetUsername.call(this,username)
   // call hmara current execution contest se kisi aur ko call kr deta h
  this.email = email
  this.password = password
}

const chai = new createUser("chai","chai@Fb.com","123")
console.log(chai);

