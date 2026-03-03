
let score="Yash";
//console.log(typeof(score));

let valueInNumber=Number(score);;
//console.log(typeof(valueInNumber)) 

//33=>number
//"33abc"=>NaN
//true=>1
//false=>0

let loggedIn="Yash";
// console.log(typeof(loggedIn))

let booleanIsLoggedIn=Boolean(loggedIn);
// console.log(booleanIsLoggedIn)
// console.log(typeof(valueInboolean)) 

//1=>true
//0=>false
//""=>false
//"Yash"=>true

let someNumber=33
// console.log(typeof(someNumber))

let stringNumber=String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

//********************************Operations************************************

let value=3
let negValue=-value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1="Yash"
let str2=" Avhad"
let str3=str1 + str2
// console.log(str3)

// console.log("1"+2)            //we wrote the string then next number directly concat with that number
// console.log("2"+1)
// console.log("2"+2+2)
// console.log(1+3+"2")            //First we wrote the numbers then firstly that numbers operation will perform and then concating with that last string


let num1,num2,num3;
num1=num2=num3=2+2                     //this is wrong practice=>this type of code not used in the companies

let gameCounter=100;
++gameCounter;
console.log(gameCounter)

// link to study(prefix and post opeartion on google)
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion