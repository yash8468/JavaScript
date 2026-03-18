//array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr2)
// console.log(typeof myArr2)    //object

//Array methods

myArr.push(6)     //this adds element to the last in array
myArr.push(7)
// console.log(myArr);

myArr.pop()
// console.log(myArr);      //pop the element from the last

myArr.unshift(9)              //add element front side
// console.log(myArr); 

myArr.shift()               //remove element in front side
console.log(myArr);    

// console.log(myArr.includes(9));  //returns boolean value
// console.log(myArr.indexOf(3));    //returns index of pass element


const newArr=myArr.join()      //after use join type is string  
// console.log(newArr);
// console.log(typeof newArr);

//##slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3);  //here only copy is generated that element and that last index is exclude
console.log(myn1);

console.log("B",myArr);
const myn2=myArr.splice(1,3)  //after splice actually that index elements is remove in that original array and both mention index are include at the time of splice
console.log("C",myArr);
console.log(myn2);





