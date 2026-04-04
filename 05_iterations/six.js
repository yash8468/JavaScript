const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
    // console.log(item);
})

// console.log(values);

//filter-filter the element base on condntion is true or false

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>{
    return num>4
})

// console.log(newNums);

//using forEach=> also filter the arr elements

let newarr=[]

myNums.forEach((num)=>{
    if(num>4){
        newarr.push(num)
    }
})

console.log(newarr);

//Task related to ->fliter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //filter the records->that has genre=>"History"

 let userBooks=books.filter((bk)=>bk.genre === "History")
// console.log(userBooks);

//fliter the object that has publish year above 1995 and genre is "History"=>using fliter

let userBooks2=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre === "History";
})

console.log(userBooks2);



