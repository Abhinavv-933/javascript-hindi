class User{
  constructor(username){
    this.username = username 
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }
  
  static createId(){
    return `123`
  }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())
// we use static where we dont want to give access of certain function to an object which has been instanciated from this class..!!

//Static methods are often used to create utility functions or properties that are related to a class but don't need to be tied to an instance of that class.
class Teacher extends User {
   constructor(username,email){
   super(username)
   this.email = email 
  }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe();
