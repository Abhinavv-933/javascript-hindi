// const coding = ["js","ruby","java","python","cpp"]

// const value = coding.forEach( (item) => {
//   //console.log(item);
//   return item;
// }) //for each koi value return nhi krne wala

// console.log(value);

const myNums = [ 1,2,3,4,5,6,7,8,9,10]
//filter v callabck he leta h
//for each value wapis nhi krta h ye krta h

// const newNums = myNums.filter( (num) => num>4)  //(num) is callback functn while num>4 is condition
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//   return num>4 // till return is not used it will give empty array cuz it will behave as scope
// }) 
// console.log(newNums);

// same output w/o using filter nd by using forEach
const newNums = []
myNums.forEach( (num) => {
  if(num > 4) {
    newNums.push(num)
  }
}) // here we have to use condition if in order to make it work
// console.log(newNums);

const books = [
  { title: 'Book One',genre: 'fiction',publish: 1981,
    edition:  2004},
  { title: 'Book two',genre: 'non-fiction',publish: 1992,
    edition:  2004},
  { title: 'Book 3',genre: 'history',publish: 1999,
    edition:  2004},
  { title: 'Book 4',genre: 'non-fiction',publish: 1989,
    edition:  2004},
  { title: 'Book 5',genre: 'history',publish: 2009,
    edition:  2004},
  { title: 'Book 6',genre: 'fiction',publish: 1987,
    edition:  2004},
  { title: 'Book 7',genre: 'history',publish: 1986,
     edition:  2004},

  ];

 // const userBooks = books.filter( (bk) => bk.genre === 'history')

  const userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === 'history')
  console.log(userBooks);
  
// this is how we practically use filter in projects