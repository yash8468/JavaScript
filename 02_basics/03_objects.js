//singleton
//object.create



//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"yash",
    "full name":"Yash Avhad",
    [mySym]:"mykey1",               //defining a symbol inside object using []
    age:18,
    location:"Ahilyanagar",
    email:"yash@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//accessing a object values are different ways

console.log(JsUser.name);           //frequently used this method
console.log(JsUser["email"]);       //if sometime key is wrote in double quotes that time they are not accessible using . operator that's why this method is used

// console.log(JsUser.full name) //using dot this not accessible because the key is defined under quotes

console.log(JsUser["full name"]);    //correct way

//symbol accessing a symbol value inside object using [] this predefined syntax
console.log(JsUser[mySym])

//changing values of keys in object
JsUser.email="yash123@gmail.com"
console.log(JsUser.email);

// Object.freeze(JsUser)       //after freeze they are not aloud to modify object

JsUser.email="yash345@gmail.com";
console.log(JsUser.email);

//adding a function inside the object

JsUser.greeting=function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User ${this.name}`);  //"this"->means refer the current object 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())


