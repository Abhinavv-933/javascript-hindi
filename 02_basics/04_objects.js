//const tinderuser = new Object();
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "varun"
tinderuser.isloggedin = false

// console.log(tinderuser); // 
const regularUser = {
  email: "someone@gmail.com",
  fullname :{
    userfullname :{
      firstname : "varun",
      lastname : "dhawan"
    }
     
  }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 :"a", 2 : "b"}
const obj2 = {3 :"a", 4 : "b"}
const obj4 = {5 :"a", 6 : "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3); // it will print {obj1: {…}, obj2: {…}} array wali problem hogi
const obj3 = Object.assign(obj1,obj2,obj4) // right way to assign the objects to another object
// right way to merge 2 objects into a single object is by using .assign method

//console.log(obj3); // it will print {1: "b", 2: "b"}
// using assign we can assign the objects to another object

// console.log = Object.assign({},obj1,obj2,obj4); // it will print {1: "b", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}
// it is just another optional way to assign objects to another objects

// const obj3 = {...obj1,...obj2,...obj4} // it is another way to assign objects to another object k/a spread operator
// console.log(obj3); // it will print {1: "b", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}


const users = [
  {
    id:1,
    email: "Animation@gmail.com",
  },
  {
    id:1,
    email: "Animation@gmail.com",
  },
  {
    id:1,
    email: "Animation@gmail.com",
  },
  {
    id:1,
    email: "Animation@gmail.com",
  },
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); // it will print the keys of the object
// console.log(Object.values(tinderuser)); // it will print the values of the object
// console.log(Object.entries(tinderuser)); // it will print the keys and values of the object


//to ask whether the object has own ?
// console.log(tinderuser.hasOwnProperty("name")); // it will print true


// object destructering 

const course = {
  coursename : "js in hindi",
  price: "999",
  courseInstructor : "varun"
}
// course.courseInstructor 

const {courseInstructor : instructor} = course // {}syntax is used to destructure the object
 // console.log(courseInstructor); // it will print varun
 console.log(instructor); // it will print varun
 // this is the way to destructure the object


 // json 
  // json is a stringified object


  // {
  //   name : "varun",
  //   coursename : "js in hindi",
  //   price : "free"
  // }
  // APIs in JSON format

  //sometimes APIs are in array format
  [
    {},
  ] 