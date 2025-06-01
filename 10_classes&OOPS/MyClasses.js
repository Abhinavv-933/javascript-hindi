// ES6

// class user {
//   constructor(username,email,pass) {
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
//   }

//   encryptPassword(){
//     return `${this.pass}abc`
//   }
// changeusername(){
//   return `${this.username.ToUpperCase()}`
// }

// }

// const chai = new user("chai","chai@mail.com","123")

// console.log(chai.encryptPassword());

// behind the scene
 function User(username,email, pass){
  this.username = username;
  this.email = email;
  this.pass = pass;
}

User.prototype.encryptPassword = function(){
  return `${this.pass}abc`
}
User.prototype.changeusername = function(){
  return `${this.username}abc`
}

const Tea = new User("tea","tea@gmail.com","123")

console.log(Tea.encryptPassword());
console.log(Tea.changeusername());

