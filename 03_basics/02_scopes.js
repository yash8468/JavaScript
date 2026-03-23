
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


