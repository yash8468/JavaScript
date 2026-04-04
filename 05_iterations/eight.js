//reduce->

const nums=[1,2,3];

//reduce=>using normal function

const myTotal=nums.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval;
},0)    //this 0 is starting initial value of accumulator->we have chanced to pass any value->based on that initial value operation will perform
console.log(myTotal)

//reduce=>using arrow function

const myTotal1=nums.reduce((acc,currval)=>{return acc+currval},0)
console.log(myTotal1);

//important example=>actually frontend developer perform same work to show the data for user=>using reduce(finalamounttopay)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]
//* very important->remember this

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);

