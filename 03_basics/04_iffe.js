// Immediately Invoked Function Expressions(IIFE)

(function chai (){
    // named iffe
    console.log(`DB connected `);
    
  })();
  
  // jo function immediately execute ho jaaye aur 
  // global scope k pollution se prblm hoti h kayi baar to us global scope k jo declaration/variables h to unko hatane k liye iife use krte h 
  
  // writing as aarow functn
  ( (name) => {
    console.log(`DB connected two ${name}`);
    
  })("abhi"); // 2nd parenthesis holds parameter 
  