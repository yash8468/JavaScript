//forEach loop

const coding=["js","ruby","java","python","cpp"];

//using normal callback function
coding.forEach(function (item){
    // console.log(item);
})             //without name function we are writing in forEach loop=>and this is also called as a callback function


//using arrow callback function

coding.forEach((item)=>{
    // console.log(item);
})

//passing the another function as a callback=>onnly pass the reference

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)  //only pass reference of another function as a callback function


//forEach keeps the values in array like=>item,index,whole array

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

//acceesing the objects inside the arrays=>important because data in a databases will also come in this format

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:".js"
    },
    {
        languageName:"java",
        languageFileName:".java"
    },
    {
        languageName:"pyhton",
        languageFileName:".py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

