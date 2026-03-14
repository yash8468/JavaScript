const name="hitesh"
const repocount=50

// console.log( name + repocount + "value")

const money=50000
console.log(`how much maoney you wants? i want ${money}`)

const gameName=new String("hitesh-hc-com")          //string created  with a new keyword that stored in a heap section to manipulate

// console.log(gameName[0]);
// console.log(gameName.__proto__)   //prototype is a object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3))
console.log(gameName.indexOf("s"))

const newstring=gameName.substring(0,4)
console.log(newstring);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   hitesh   "
console.log(newStringOne.trim());                      //remove the leading and trailing spaces

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20","-"))                 //replaces the content in string

console.log(url.includes("sundar"))  //returns boolean value

console.log(gameName.split("-"));    //divide a string using that pass separater in double quotes
  

