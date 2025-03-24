// for 

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element ==5 ){
     // console.log("5 is the best number");
    }
    //console.log(element);
    
      
  }
  
  for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
      //console.log(`inner loop value is ${j} and inner loop ${i}`); 
      //console.log(i + '*' + j +  '=' + i*j);
      
    } 
  }
  
  let myArray = ["flash", "superman", "batman", "wonder woman"];
  
  for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    //console.log(element);
  }
  
  // KEYWORDS //
  
  // BREAK and CONTINUE
  
  for (let index = 0; index <= 20; index++) {
    if(index == 5){
      console.log("5 is best number");
      continue
    }
    console.log(`value of i is ${index}`);
    
    
  }