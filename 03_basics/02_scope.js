var c =80 // global scope(values which will be available inside scope but vice versa is not true)


// if curly bracket come up with some if-else or some function then it is called as scope
if(true){ // block scope
  let a =10
  const b = 20
  var c = 30 // var will create problem inside thats  why scope is used
} 
// console.log(a);
// console.log(b);
// console.log(c);

let a = 300 // global scope
if(true){ 
  let a =10
  const b =80
  // console.log("INNER: ",a); // it will print a = 10 of inner scope
}
// console.log(a) // it will print 300 nd it will save us from bugs

// +++if we check our scope in windows it will be different from wht we will get from here from node 
 

function one(){
  const username = "abhi"
  
  function two (){
    const website = "youtube"
    console.log(username)  // here it will print username becuz local scope can console or ask from global scope to print inside it but not vice versa

  }
  // console.log(website); // it will not print becuz we cannot print this outside of local scope (bada admi chote bacche se ice cream nhi maang skta)
  two()
  
}
// one()
// closure -- when child function can access parent variable (will stusdy further)

if(true){ // another example 
  const username = " hitesh"
  if(username === " hitesh"){
    const website = "youtube"
   //  console.log(username + website );
  }
}

// +++++++++++++++ interesting ++++++++++++++++++

function addone(num){
  return num +1
}
console.log(addone(5)) // only returned not print 


// in js variables can hold anything like json ,functions etc

// addtwo(5)
const addtwo = function(num){ // here it is bit diff from function and thats why they are called as expressions
    // here we have holded the function into a variable thats why (another concept hoisting which will explain further)
  return num +2 
} 
 
