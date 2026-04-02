//if


// const isUserLoggedIN=true;
const temparature=41;

if(temparature<40){
    console.log("less then 40");
}else{
    console.log("temperature is greater than 40")
}

console.log("Execute")
//<,>,<=,>=,==,!=,===,!=

const score=200

if(score===200){
    let power="fly";
    console.log(`User power: ${power}`)
}

// console.log(`User Power: ${power}`)           //Error->power is not defined because power is declared inside the scope that is not accessible globally

const balance=1000;

//way of writing "if" in single line but this is not a good practice

if(balance>500) console.log("test"),console.log("test2");  //we are able be write multiple console.log() to separate using "," but this not best practice )

if(balance<500){
    console.log("less than 500");
}else if(balance<900){
    console.log("balance is less than 900");
}else{
    console.log("balance is less than 1200");
}

const isUserLoggedIN=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(isUserLoggedIN && debitCard){
    console.log("allow to buy Course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

