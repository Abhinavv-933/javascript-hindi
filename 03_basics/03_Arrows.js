// THIS and Arrrows

const user = {
    username : "abhi",
    price : 999,
    
     welcomeMessage: function(){
       console.log(`${this.username} , welcome to website`);
       console.log(this); 
      } 
      // 'this' function is used inside a object 
    }
    
    //  user.welcomeMessage()
    //  user.username = "sam"
    //  user.welcomeMessage()
    
    // console.log(this)
    // browser k andar jo global object h wo h window object h
    
    
    // function chai(){
    //    let username = "abhi"
    //    console.log(this.username);
    
    // }
    // chai() // it will print undefined cuz this only works in objects & not in functions
    
    // const chai = function(){
    //   let username = "abhi"
    //   console.log(this.username);
    
    // } // same output undefined he hoga cuz function k anar k
    
    // declaring function with help of arrow function
    const chai = () => {
      let username = "abhi"
      //console.log(this);
    
    }
    
    chai() // arrow me this use nhi kr skte 
    // When used inside a method of an object, this refers to the object.
    
    // In a standalone function (not a method), this refers to the global object (window in browsers, global in Node.js), or undefined in strict mode.
    
    // +++++++Arrows ++++++++++++
    
    // const addTwo = (num1,num2) => {
    //   return num1 + num2 
    // }
    // implicit return 
     addTwo = (num1,num2) => (num1 + num2) ;
    // { } me return keyword use krna pdega () me nhi
    addTwo = (num1,num2) => ({username:"abhi"}) //parenthesis is imp here in order to print username
    
    console.log(addTwo(3,4))
    
    
    