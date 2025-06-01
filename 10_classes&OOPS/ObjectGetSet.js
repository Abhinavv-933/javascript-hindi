const User = {
  _email : 'a@hg.com',
  _password: "abc",

  get email(){
    return this._email.toLocaleUpperCase()
  },

  set email(value){
      this._email = value 
  }
}

const tea = Object.create(User)
console.log(tea.email);
//getter setter special method h jo property k uper rkhte h ,get set overwrite kr deta h process data laate wakt memeory se
