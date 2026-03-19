
const marvel_heros=["thor","Ironman","spiderman"]
const dc_heors=["superman","flash","batman"]

// marvel_heros.push(dc_heors);       //this creates a array of array not a proper combines in a single array

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros=marvel_heros.concat(dc_heors)   //this make a proer concatenation but limitation is only one array possible to join at a time
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heors]  //this is spread operator->here possible to combined multiple arrays properly in a single array
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)   //you mention depth inside flat method or directly infinity
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));  //here validating data is array or not
console.log(Array.from("hitesh"));     //this covert you data into array
console.log(Array.from({name:"hitesh"})); //interesting->here they confused which one is choose for convert in array(key or value that's why they return empty array) we required to mention it key or value use it for convert

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))