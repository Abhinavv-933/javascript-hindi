// for of 

["", ""]
[{}, {} , {}]

const arr = [1 ,2 ,3,4 ,5]

for (const num of arr) {
 // console.log(num);
  
}

const greetings = "Hello world!"
for (const greet of greetings) {
 // console.log(`each char is ${greet}`);
  
}

// Maps(Maintains the unique key value pair)

const Maps = new Map()
Maps.set('IN',"INDIA")
Maps.set('US',"USA")
Maps.set('fr',"france")
Maps.set('IN',"INDIA") // even if we give same input 2 times still one output

//console.log(Maps);

for (const [key,value] of Maps) { // array ka destructure ho jata h yahan pe 
  //console.log(key,':-' , value);
}

const myObj = {
  'game1' : 'NFS',
  'game2' : 'spiderman'
}
for (const [key,value] of myObj) {
  console.log(key , ':-', value);
  // object are not iteriable here thats why altho maps are iteriable
}
