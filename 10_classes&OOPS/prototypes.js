// let myName = "abhinav     "
// let myChannel = "chai     "

// console.log(myName.true.length);

let myHeros = ["spiderman", "thor"]

let heroPower = {
  thor:"hammer",
  spiderman : "sling",

  getSpiderPower : function(){
    console.log(`spidy power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh = function(){
  console.log(`abhinav is present in all objects`);
  
}

Array.prototype.heyabhinav = function(){
  console.log(`abhinav says hello`);
  
}
// heroPower.abhinav()
// myHeros.abhinav()
myHeros.heyabhinav()
// heroPower.heyabhinav()

//inheritance 

const user = {
  name : "nonu",
  email: "nonu@google.com"
}

const teacher = {
  makeVideo: true
}

const  TeachingSupport = {
  isAvailable : false
}

const TASupport = {
  makeAssignment: 'js assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

teacher.__proto__ = user 
//kisi aur ki properties ko kaise access kr skte ho yahi 
// prototypal inheritence  hota h

// modern syntax 
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername  = "chaiAurCode"
  String.prototype.truelength = function(){
   console.log(`${this.name}`);
   console.log(`${this.name}`)
   console.log(`true length is : ${this.trim().length}`);
  }

  anotherUsername.truelength()
  "hitesh".truelength()
  "iceTea".truelength()
