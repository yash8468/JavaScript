//map concept=>map is used to manipulate the data to create another something based on original data

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newnums=myNumbers.map((num)=>{return num+10})
// console.log(newnums)



//chaining (also you can use fliter,map etc between this chaining)

const newnums2=myNumbers
.map((num)=>num*10)    //first multiply all values by 10 and stored in this variable then next map operation
.map((num)=>num+1)  //previous result values added by one 
.filter((num)=>num>=40)

console.log(newnums2);