
let a=300;
if(true){
    let a=10;
    const b=20;
    var c=30
    console.log("Inner a:",a)
}

// console.log(a);      //not allowed to access outside
// console.log(b);      //--//---

console.log(c);   //c is a accessible outside->this a scope problem of var datatype->that's why this not used

console.log(a)    //global scope a will print here


function one(){

    const username="Yash";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);           //error
    two()
}

one()


if(true){

    const username="yash";
    if(username==="yash"){
        const website=" youtube";
        console.log(username+website);       //username access aloud because they define as a global outside of nested function  
    }

    // console.log(website);                        //"website variable not aloud to access ouside the scope"
}

// console.log(username);   //local variable not aloud to access in global space

// ***********Interesting**************

console.log(addone(5))                       

function addone(num){                 //we define a function in this format of "normal function"then =>you call that function in any location in that file without any error(like function is not defined)
    return num+1;
}



console.log(addTwo(8))   //we define a function in the format of "function expression" then =>you call only that function after function declaration not in any location like a "normal function" in that file
    return num+1;

//function expression
const addTwo = function(num){
    return num+2;
};

console.log(addTwo) //error=>without bracket and parameter we already defined=>function expression not aloud to access