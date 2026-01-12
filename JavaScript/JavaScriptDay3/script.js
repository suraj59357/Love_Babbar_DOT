// Today topic is inbuilt function and Array
// 1.Math Objects

// 2.String Objects 
// Note: There are two types of string in javascript
// String--->Primitive type
// String--->Objects (mdn)
// Homework
    // 1.trim();
    // 2.slice();
    // 3.split();
    // replace();

// Homework: Escape Sequences

// 3.Template Literal:(``);
// 4.Date and Time;

// 5.Array
    // Array is the Collection of same data type which is store in a contiguous memory location.
    // But in JavaScript  We can store different types of element in Array.
    // And Array is the type of Objects in JavaScript.

    // 1.Adding new Elements
    // 2.finding Elements 
    // 3.Removing Elements 
    // 4.Splitting Elements
    // 5.Combining Elements

// 6.Spread Operator
// 7.Iterating an Array
    // 1.for-of loop
    // 2.for-each
    // 3.arrow func using for-each
// 8.Joining Array
// 9.Split
// 10.sorting Array in Objects 
// 11.filtering array
// 12.Mapping Array
// 13.Reducing Array(Homework)




// 1.Math Objects

console.log("Hello Dunia! Kaise ho Sare");
// console.log("Random number is :",Math.random()); 
// console.log("Pi value is :",Math.PI);
// console.log("The Round off number is :",Math.round(1.2));
// console.log("The Round off number is :",Math.round(1.9));
// console.log("Pow is",Math.pow(2,3));
// console.log("Minimum number is :",Math.min(2,3));
// console.log("the maximum number is :",Math.max(3,5));
// console.log("The nearest minimum num is :",Math.floor(5.6));



// Note: There are two types of string in javascript
// String--->Primitive type
let lastName="Kumar";
// console.log(typeof(lastName));
// console.log(lastName.includes("Ku"));
// console.log(lastName.endsWith("ar"));
// console.log(lastName.startsWith("Ku"));
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());


// String--->Objects
let firstName = new String("Suraj");
// console.log(typeof(firstName));


//3.Template Literal
let message=
`To,
    The Principal
    Gurugram public School,Bishnugarh (Hazaribagh);
`;

// console.log(message);



// 4.Date and Time;

let date=new Date();
// console.log(date);

let date2=new Date(2024, 2, 10, 2, 30);
// console.log(date2);

let date3=new Date("December 17, 1995 03:24:00");
// console.log(date3);

// setter and getter method
date3.setFullYear(1994)
// console.log(date3.getFullYear());



// 5.Array
    // Array is the Collection of same data type which is store in a contiguous memory location.
    // But in JavaScript  We can store different types of element in Array.
    // And Array is the type of Objects in JavaScript.

    // 1.Adding new Elements
    // 2.finding Elements 
    // 3.Removing Elements 
    // 4.Splitting Elements
    // 5.Combining Elements

let arr=[10,2,4,5,6];
// console.log(arr);

// 1.Insertion in Array or Adding new Elements

// 1.Inserting element in end
// arr.push(9);
// console.log(arr);

// 2.Inserting element in start or beginning
// arr.unshift(12);
// console.log(arr);

// 3.Insertin element in Middle
//  splice(idxNo.,delete,insertion)
// arr.splice(2,0,'a','b');
// console.log(arr);



// 2.Searching or finding Elements 
// console.log(arr.indexOf(6));
// console.log(arr.includes(6));

let student=[
    {Roll_no:1,firstName:"Suraj"},
    {Roll_no:2,firstName:"Rahul"},
]

// console.log(student);

//Callback func or predicate func
let courses=student.find(function(student){ 
    return student.firstName=="Suraj";
})
// console.log(courses);

// Callback func using Arrow Function
let book=student.find(student => student.firstName == "Suraj" );
// console.log(book);



// 3.Removing function
//  1.pop() removing last element 
    let num=[1,2,3,4,5,6,7];
    // console.log(num.pop());
    
//  2.shift() removing first element
    // console.log(num.shift());

//  3.splice() removing element from middle
    // syntax:splice(idxNo.,no.of elem which u want to delete);
    // console.log(num);
    // console.log(num.splice(2,1));
    // console.log(num);


// 4.Emptying an Array
let numbers=[1,2,3,4,5];
let numbers2=numbers;

// numbers=[];
// console.log(numbers);
// console.log(numbers2);

// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);

numbers.length=0;
// console.log(numbers);
// console.log(numbers2);


// 5.Combining and slicing Arrays
// Homework : Combining and slicing ko hum objects ke upper bhi apply krke ke dekhna hai 
let first=[1,2,3];
let second=[4,5,6];

let concate=first.concat(second);
// console.log(concate);

let marks=[10,20,30,40,50,60,70,80];
// let slices=marks.slice(2,4);
// let slices=marks.slice(2);
let slices=marks.slice();
// console.log(slices);


// 6.Spread Operator
let num1=[1,2,3];
let num2=[4,5,6];

let spread=[...num1, ...num2];
// console.log(spread);


// 7.Iterating an Array
let array=[1,2,3,4,5,6];

// 1.using for-of loop
for(let val of array){
    // console.log(val);
}

// 2.using for for-each loop
array.forEach(function(lumber){
    // console.log(lumber);
})

// 3.using arrow function
// array.forEach(lumber=>console.log(lumber));


// 8.Joining Array
let area=[1,2,3,4,5];
// let join=area.join(',');
// console.log(join);


// 9.split 
let messages='This is my first message';
let split=messages.split(' ');
// console.log(split);

let joined=split.join('_');
// console.log(joined);



// 10.Sorting Arrays
let arrSort=[10,2,3,4,5];
arrSort.sort((a,b)=>a-b);
// console.log(arrSort);

// sorting Array in Objects 
let studentMarks=[
    {no:1,firstName:"Suraj",marks:85},
    {no:2,firstName:"raj",marks:80},
    {no:3,firstName:"Raju",marks:95},
]

studentMarks.sort((a,b)=>b.marks-a.marks);
// console.log(studentMarks);


// 11.filtering Arrays
let largeArray=[10,20,30,-1,-10,40,-4,50,-9,2];
let numArray=largeArray.filter(value=>value>0);
// console.log(numArray);


// 12.Mapping Arrays
let varArray=[1,2,3,4,5,6];
// let map=varArray.map(function(value){
//     return "student_RollNo:"+value;
// })
let map=varArray.map(value=>'student_RollNo:'+value);

// console.log(map);



// 13.Mapping with Objects
let arrayNum=[4,5,-3,50,-9];
let filter=arrayNum.filter(value=>value>=0);
console.log(filter);

// let maps=filter.map(function(numValue){
//     return {value:numValue};
// });
let maps=filter.map(num=>({value:num}));
console.log(maps);