const myNums = [1 , 2,3]

// const myTotal = myNums.reduce( function(acc,currval){
//   console.log(`acc : ${acc} and currval : ${currval}`);
//   return acc + currval
  
// },0) //here 0 is initial value , acc- accumulato , currval - currentvalue
//console.log(myTotal);
 
//using arrow function
const myTotal = myNums.reduce( (acc,curr) => acc + curr , 0)
// console.log(myTotal); o/p -6

const shoppingCart = [
  {
    itemName : "js course",
    price : "999"
  },
  {
    itemName : "python course",
    price : "1999"
  },
  {
    itemName : "DS course",
    price : "2999"
  },
  {
    itemName : "web dev course",
    price : "3999"
  },
]
// to add total we use reduce
const priceToPay = shoppingCart.reduce( (acc,item) =>  acc + Number(item.price) ,0)
console.log(priceToPay);
