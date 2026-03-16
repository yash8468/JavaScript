//dates

let mydate=new Date()
// console.log(mydate);
// console.log(typeof mydate);            //object
// console.log(mydate.toDateString());     //day+date
// console.log(mydate.toISOString());
// console.log(mydate.toString());            //global date+day+timestamp
// console.log(mydate.toLocaleString());          //timestamp+date
// console.log(mydate.toLocaleDateString());   //this give only date



let myCreatedDate1=new Date(2026,0,23)
// console.log(myCreatedDate1.toLocaleDateString());

let myCreatedDate2=new Date(2026, 0, 23, 5, 3)
// console.log(myCreatedDate2.toString());

let myCreatedDate3=new Date("2026-3-16")
// console.log(myCreatedDate3.toDateString());
// console.log(myCreatedDate3.toLocaleDateString());


let myTimeStamp=Date.now()
// console.log(myTimeStamp);          //this will come in milliseconds

// console.log(myCreatedDate3.getMonth()+1);  //+1 because here month started from 0
// console.log(myCreatedDate3.getTime());

// console.log(Math.floor(Date.now()/1000));   //converting a time milliseconds to seconds by dividing 1000


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday:"long",
});

console.log(newDate.getDay());
