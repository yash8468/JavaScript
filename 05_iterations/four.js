//for in loop->for objects
const myobject={
    js:"JavaScript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"   //objects required for in loop to iterate
}

for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);
}


//for in loop->for array
const programming=["js","rb","py","java","cpp"];

for(const key in programming){
    console.log(programming[key]);                //for in loop ->keep the index values in array
}

//for in loop->for map

const map=new Map();

map.set("In","India");
map.set("USA","United state of america");
map.set("fr","France");
map.set("In","India");

for(const key in map){
    console.log(key);               //here didn't print anything so,=>for in loop=>not works on map directly
}
