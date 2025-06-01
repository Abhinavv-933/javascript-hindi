class User {
  constructor(username){
    this.username = username
  }

  logMe(){
     console.log(`USERNAME is ${this.username}`);
  }
}

// extends keyword can access other class and get the data or input from there
// and then it can be used in other class using super(username) keyboard.
class Teacher extends User{
  constructor(username,email,password){
    super(username);
    this.email = email;
    this.password = password;
  }


  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }

}

const chai  = new Teacher("chai","chai@teacher.com","123")

chai.addCourse()
const MasalaChai = new User("MasalaChai")

MasalaChai.logMe()

console.log(chai instanceof User)//instance or part h
