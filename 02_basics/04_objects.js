const tinderuser1=new Object()    //this is singleton object in js
// console.log(typeof(tinderuser));

const tinderuser={}       //object literal

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isLoggedIn=false

// console.log(tinderuser);

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"yash",                //object nesting
            lastname:"Avhad"

        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);    //using dot opeartor accesssing a value
// console.log(regularuser.fullname.userfullname["firstname"])  //using bracket pass key in a double quotes to accessing a value

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

const obj4={obj1,obj2}    //this merging object method have problem they separately add the objects in a single another object not the combined in a single object
// console.log(obj4);

const obj5=Object.assign({},obj1,obj2,obj3)    //this methos merges properly different object key-values in a single object
// console.log(obj5)

const obj6={...obj1,...obj2}   //mostly used method to merge object->using spread opeartor 90% in production code
console.log(obj6);



const users=[                      //array of objects->after you interact with databases this type of object you handled

    {
         id:1,
         email:"h@gmail.com"
    },
    {
        id:2,
        email:"y@gmail.com"

    },
    {
        id:3,
        email:"a@gmail.com"
    }
]

//  console.log(users[0].id);                              //accesing a value in a array-of-object->using index of that object in array

// console.log(tinderuser)
// console.log(Object.keys(tinderuser));  //return the all keys in a object->as an array

// console.log(Object.values(tinderuser))  //return the all values are present in object->as an array

// console.log(Object.entries(tinderuser)) //this returns key-value pair in array format separated by , in a single big array



