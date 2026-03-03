//primitive->datatypes

//string,number,boolean,null,undefined,symbol,bigint

const score=100
console.log(typeof score)               //number
const scorevalue=100.3                  
console.log(typeof scorevalue)          //number

const isLoggedIn=false 
console.log(typeof isLoggedIn);         //boolean

const outsideTemp=null             //if null value is assigned to the variable then that type is object
console.log(typeof outsideTemp)     //object

let userEmail;
console.log(typeof userEmail);        //undefined


const id=Symbol("123")
const anotherId=Symbol("123")
console.log(typeof id);               //symbol

console.log(id===anotherId)           //false->because symbol is unique .if content is same but every symbol is unique


const bigintnumber=232832838238283382n;
console.log(typeof bigintnumber)                //bigint


//Reference(means actual chages in original data)=>(NON-PRIMITIVE)->datatypes

//Array,objects,functions

const heros=["marvel","nagraj","doha"];
console.log(typeof(heros));                //object

let myobj={
    name:"Yash",
    age:22
}         
console.log(typeof(myobj));         //object

const myfunction=function(){
    console.log("Hello World");
    
}
console.log(typeof myfunction)        //function



//for detail info about this section  in documentation linke

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack(primitive),heap(non-primitive)

let myyoutubename="yashavhaddotcom";

let anotheername=myyoutubename;
anotheername="yash__0032"

console.log(myyoutubename)
console.log(anotheername);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="yash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



