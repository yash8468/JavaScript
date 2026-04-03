//for of
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5];

for(const num of arr){
    // console.log(num);
}


const greetings="Hello World";
for(const greeting of greetings){
    if(greeting===" "){
        continue;
    }
    // console.log(greeting);
}

//Maps

const map=new Map();
map.set('In',"India");
map.set('USA','United State Of America')
map.set('Fr',"France");
map.set('In',"India")     //map didn't include the duplicate pairs and It also preserves the insert order.

// console.log(map)   //directly printing of map is not possible

for(const [key,value] of map){
    console.log(key,":-",value);   //suppose we are only mentioning the "key" as single iterator then they returns directly array of key-value pair in map, that's why we pass [key,value] both as a iterator to access  it both value.
}

//related to object

const myObject={
    game1:"NFS",
    game2:"Spiderman"
}

for(const [key,value] of myObject){
    console.log(key,":-",value);                  //error->on the object->for of loop not works
}
