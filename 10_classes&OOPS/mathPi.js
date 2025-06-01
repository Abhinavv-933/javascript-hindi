const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI =  5;  //overwriting he pi value
// console.log(Math.PI);  // didnt get the overwritten value

const chai = {
  name: 'ginger chai',
  price:250,
  isAvailable :true,

  orderChai : function(){
    console.log("chai nhi bni");
    
  }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// this will be giving us description about property 

Object.defineProperty(chai,'name',{
  // writable: false,
  enumerable : true // if we change it to false then we wont get  the name

})
   
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
  // now we can changed the property 


  //object are iterable and not iterable depending upon the situation,
  // if we want to iterate the object then we use object.entries
 for(let [key,value] of Object.entries(chai)){
  if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
  }
  
 }