const  myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
  }
  // to iteriate object we use FOR IN LOOPS
  for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
    
  }
  
  // for in loop using in array
  
  const programming = [ "js","rb","cpp"]
  for(const key in programming ){
    // console.log(key); // keys in array are index starting from 0;
    // console.log(programming[key]); // isme values aati h
  }
  
  // const Maps = new Map()
  // Maps.set('IN',"INDIA")
  // Maps.set('US',"USA")
  // Maps.set('fr',"france")
  // Maps.set('IN',"INDIA")
  
  // for (const key in Maps) {
  //  console.log(key); // map is not iteriable thats why no output
   
  // }
  
  