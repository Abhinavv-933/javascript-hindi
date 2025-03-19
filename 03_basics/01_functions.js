// functions ++++++++++

function SayMyName(){
    console.log("Heisenberg");
    console.log("Heisenberg");
    console.log("Heisenberg");
    console.log("Heisenberg");
  
  }
  
  // SayMyName();  // call the function
  
  // function addTwoNumbers(num1,num2){ // here num1,num2 are parameters
  //   console.log(num1+num2);
  // }
  
  addTwoNumbers(4,2); // here 4,2 are arguments
  // usually problems oocurs when we dont pass the correct number of arguments like having a string & a number 
  
  function addTwoNumbers(num1,num2){ // here num1,num2 are parameters
     let result= num1+num2;
     return result
    console.log("abhi")// anything or anyline after return statement will not be executed)
  }
  
  const result = addTwoNumbers(4,2);
  //console.log("result :", result);
  
  function loginUserMessage(username){
    return `${username} just logged in `
  }
  
  // loginUserMessage("abhianv") // it doesn't display anything because the returned value is not used or logged.
  // console.log(loginUserMessage("abhinav"));
  
  // using same ex to learn if-else
  function loginUserMessage(username){
    if(username === undefined){
      console.log("please enter a username");
  
    }
    return `${username} just logged in `
  }
  //console.log(loginUserMessage("ABHINAV"))
   // undefined === false value
   // empty string == false value
  
  // we dont know the no. of arguments coming -- shoppign list problem
  
  function calculatePrice(val1 , val2, ...num1){  //... operator is called as rest and spread operator it called rest or spread acc to its use 
      return num1 
  }
   // console.log(calculatePrice(200,300,400,600,800))
  
   // the rest operator will give all data in the form of a array which eases our job
  // sometimes we use val1 nd val2 so that it will takw first 2 values nd rest values will be in array
  
  const user = {
    username : "abhinav",
    price : 199
  }
  
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }
  // handleObject(user)
  handleObject({
    username : "sam",
    price : 209 ,
  })
  
  const NewArray = [200,300,400,500]
  
  function returnSecondValue(getArray){
    return getArray[1]
  }
  // console.log(returnSecondValue(NewArray));
  console.log(returnSecondValue([200,300,400,500]));