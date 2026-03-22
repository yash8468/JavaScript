function sayMyName(){         
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
};

sayMyName; //this name is a=> function "reference"
sayMyName();// after reference you put the brackets()->then is is called "execute"


// function addTwoNumbers(number1,number2){
      
//     console.log(number1+number2);
// };                                     //this function prints a value he don't return any value


// const result=addTwoNumbers(2,3);
// // console.log(result);                 //undefined->because function not return anything to store in that "result "variable

function addTwoNumbers1(number1,number2){
    // let result=number1+number2;
    // return result;

    return number1+number2;              //after return statement our function is terminate->if try to print a statement after return they don't print
}

const result1=addTwoNumbers1(3,4);

// console.log("Result: ",result1);


function loginUserMessege(username="sam"){  //by default we set a "Sam" name if any user will not pass the value then "sam" will use here
    
    if(!username){
        console.log("Please enter a username");
        return;                                   //means stops the function here
    }

    return `${username} just logged in`
}

console.log(loginUserMessege());            //"sam" is just logged in
console.log(loginUserMessege("yash"));      //"yash" is just logged in


//functions with objects and arrays

function calculateCartPrice(val1,val2,...num1){
    return num1;                                 
};

console.log(calculateCartPrice(200,400,500,2000)); //200,and 400 argument assign to the val1 and val2 parameters ,and then remaining is for num1(here use (...num1)->rest operator that returns a array that contain that argument passed by user)

//object with function
const user={
    username:"yash",
    prices:199                  
};

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
     
};

handleObject(user);   //somtime we enter "price" is and object contain "prices" this create a problem->we are required to check first which values are in our object means validation required

handleObject({ username:"bhai",prices:999});  //here we directly passed object as a argument

//object with array

const myNewArray=[200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,300,400,500])); //directly passed array as a argument


