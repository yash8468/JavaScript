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


