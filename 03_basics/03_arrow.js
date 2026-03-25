const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
         console.log(this)                   //refer current context of object
         console.log(`${this.username}, welcome to website`);
    }
}


user.welcomeMessage();
user.username="Yashya";
user.welcomeMessage();


console.log(this);        //o/p={}

//arrow function(type-1-declaration)
const chai=()=>{
     let username="hitesh";
     console.log(this.username);  //undefined->this in a function behaves different as compared to object
}

// chai() 

//(type-2-declaration)
const addTwo=(num1,num2)=>{
    return num1+num2;
};                          //you are using the curly braces for arrow function declaration-> then reuquired the return statement

console.log(addTwo(3,4));

//(type-3-declaration)
const addThree=(num1,num2,num3)=>(num1+num2+num3);
console.log(addThree(5,6,7))
                           
                     //you are using the bracket for arrow function declaration ->then doesn't need the return statement

//(type-4-declaration)
const addtwo=(num1,num2) => num1+num2;
console.log(addtwo(7,8));

//(type-5-used in react mostly this ->for return a object)

const addfour=(num1,num2)=>({username:"yash"})

console.log(addfour(4,5));

//forEach

const myarray=[2,5,3,7,8];
myarray.forEach((num)=>{
    console.log(num);
}
);


//Note=>suppose we are trying to print the this on web-brower in connsole->they returns window object
//and in Node environment they return simple empty object in a file->{}




