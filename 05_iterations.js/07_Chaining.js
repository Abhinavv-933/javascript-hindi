const myNumers = [1,2,3,4,5,6,7,8,9,10]


//const newNums = myNumers.map( (num) => {return num + 10})
//console.log(newNums);

//chaining -- using multiple map is k/a chaining

const newNums = myNumers
                     .map( (num) => num*10 )
                    .map( (num) => num + 1) // here value of num will be taken from operation after previous num
                    .filter( (num) => num>=40)
      console.log(newNums);
                     