const coding = ["js","cpp","rb"]

// call back function - it simply means to give him a function also it does not have name
coding.forEach( function (val) {
  // console.log(val); 
  
} )
// using arrows
coding.forEach(  (item) => {
  // console.log(item);
  
})

//  function printMe(item){
//   console.log(item);
  
//  }

//  coding.forEach(printMe)

coding.forEach( (item , index, arr) => {
  //console.log(item , index,arr); // call back function gives values,index and array
})

const myCoding = [
  { 
    languageName : "javascript",
    languageFileName : "js",
  },
  { 
    languageName : "pyhton",
    languageFileName : "py",
  },
  { 
    languageName : "java",
    languageFileName : "java",
  }
]

myCoding.forEach( (item) => {
  console.log(item.languageFileName);
  
})
