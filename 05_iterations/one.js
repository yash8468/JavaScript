//for

for(let i=1;i<=10;i++){
    const element=i;

    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);

};

// console.log(element);              //error element is at the block scope->not accessible outside

for(let i=1;i<=10;i++){
    console.log(`Outer loop values is : ${i}`);
    for(let j=1;j<=10;j++){
        //  console.log(`Inner loop value: ${j} and outer loop ${i}`);
        console.log(i+ "*" + j + "=" +(i*j));
    }
}

let myArr=["flash","batman","superman"];
console.log(myArr.length);
for(let i=0;i<myArr.length;i++){
    const element=myArr[i];
    console.log(element);
}


//break and continue

for(let idx=1;idx<=20;idx++){

    if(idx==5){
        console.log(`Detected 5`);
        break;                           //stop loop here
    }
    console.log(`Value of idx is ${idx}`)
}
for(let idx=1;idx<=20;idx++){

    if(idx==5){
        console.log(`Detected 5`);
        continue;                          //skip the specific iteration
    }
    console.log(`Value of idx is ${idx}`)
}


