class User {
  constructor (email,password){
    this.email = email;
    this.password = password;
  }
  
  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }


  get password(){
    return `${this._password}abhi`
  }

  set password(value){
    this._password = value
  }
}

const abhi = new User("a@gmail.com","abc")
console.log(abhi.email);

// we use getter and setter when we want to refrain user from using some of the properies or sbko access nhi dena chahte
