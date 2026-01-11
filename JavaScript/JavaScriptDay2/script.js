// 1.Object in JS : collection of key value pairs;
// examples:
//     let a={}; //empty objects
//     let rectangle={
//         length:"4",
//         breadth:"10",
//     }

// 2.Objects Creation - How?
//  1.Factory function
//  2.Constructor function

// 3.Dynamic Nature of Objects
// 4.Constructor property
//      Internal implementation of Rectangle.constructor aise hua hoga;
 
// Note: Functions are also an Objects..

// 5.Types of JS
    // 1.Primitive or value type :(String, Number, Boolean, undefined, Null);
    // 2.Reference type or Ojects :(Function, Objects, Null);

    // Primitives are copied by their value;
    // references are copied by their address/references; 
    // primitive vs references

// Iteration through Objects
// 1.for-of loop
// for-of:we can use this only in iterables
// Note:iterables means Array,maps etc.

// 2.for-in loop

// Checks keys already exist or not

// 6.Object Cloning
    // 1.Iteration
    // 2.Assign
    // 3.Spread

// 7.Garbage Collection
//     Garbage Collection: It is find Variables and Constant. And Automatically deallocate from the memory 
//      We have not controll in Garbage Collector

// 8.Homework
//  1.Math Object
//  2.String Objects
//  3.Template Literal
//  4.Date Object in JS



console.log("hello Dunai!..");
const rect={
    length:"5",
    breadth:"10",

    func: function(){
        console.log("Hello");
    }
}

// console.log(rect.length);
// console.log(rect['breadth']);
// console.log(rect.func());


// 2.Objects Creation - How?
//  1.Factory function
//  2.Constructor function 

// 1.factory function
function createRectangle() {
    let rectangle={
        length:"5",
        breadth:"10",

        draw:function(){
            console.log("Hello Dunai!..");
        }
    }

    return rectangle;
}

// Factory func. Shortcut
function createRectangle() {
    return rectangle={
        length:5,
        breadth:10,

        draw:function(){
            console.log("Hello Dunai!..");
        }
    }
}

// let newRectangle5 = createRectangle();
// console.log(newRectangle5.length);
// console.log(newRectangle5.draw());



function createRectangle(leng,bre){
    return rectangle={
        //we can also write this
        // length:len,
        // breadth:bre,

        leng,   
        bre,

        draw:function(){
            console.log("hello dunai!...");
        }
    }
}

// let newRectangle1=createRectangle(4,5);
// let newRectangle2=createRectangle(10,12);
// console.log(newRectangle2.leng);
// console.log(newRectangle1.draw());


// 3.Constructor Function
// this.= it is referring current object
// use pascal Notation in constructor function
// new keyword return empty object

function Rectangle(){
    this.length=1;
    this.breadth=2;

    this.draw=function(){
        console.log("Hello Dunia!...");
    }
}

let createRectangleObject1 = new Rectangle();
// console.log(createRectangleObject.length);

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;

    this.draw=function(){
        console.log("Hello Dunia!...");
    }
}

let createRectangleObject = new Rectangle(4,5);
// console.log(createRectangleObject.length);

// Dynamic Nature of Objects
createRectangleObject.color = "Yellow";
// console.log(createRectangleObject);

delete createRectangleObject.color;
// console.log(createRectangleObject);

// Constructor Property
// console.log(createRectangleObject.constructor);
// console.log(Rectangle.constructor);

// console.log(Rectangle.constructor);
// Internal implementation of Rectangle.constructor aise hua hoga;
let Rectangle1 = new Function(
    'length','breadth',
    `this.length=length;
    this.breadth=breadth;

    this.draw=function(){
        console.log("Hello Dunia!...");
    }`
);

let rectObj=new Rectangle1(40,50);
// console.log(rectObj);


// 5.Types of JS
    // 1.Primitive or value type :(String, Number, Boolean, undefined, Null);
    // 2.Reference type or Onjects :(Function, Objects, Null);

//Primitive or value type
let a=10;
let b=a;

a++;
// console.log("a is :",a);
// console.log(("b is :",b));

// 2nd examples
let ab=10;
function abc(ab){
    ab++;
}
//console.log(ab);//o/p:10

//Referencing type
let a1={value:10,};

let b1=a1;

a1.value++;
// console.log(a1.value);
// console.log(b1.value);

// 2nd Example
let abn={value:10};
function abnc(abn){
    abn++;
}

abnc(abn);
// console.log(abn.value);


// Iteration in Objects
let calRectangle={
    length:5,
    breadth:10,
}

// for-in loop
for(let key in calRectangle){
    //keys are reflected through key variable;
    //keys are reflected through rectangle[key];

    // console.log(key,calRectangle[key]);
}

// for-of loop:we can use this only in iterables
// Note:iterables means Array,maps etc.
// we can use for-of loop in Object using hack(Object.keys and Object.entries);
for(let key of Object.keys(calRectangle)){
    // console.log(key);
}

// Checks keys already exist or not
if('color' in calRectangle){
    // console.log("Present");
}else{
    // console.log("absent");
}


//6.Object Cloning
    // 1.Iteration
    // 2.Assign
    // 3.Spread


let src={
    value:10,
    num:20,
};

//Type1.Cloning through Iteration
// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// console.log(dest.num);


// Type2.Cloning through Assign
// let dest=Object.assign({},src);
// console.log(dest);


// Type3.Cloning through Spread
// let dest={...src};
// console.log(dest);

// Garbage Collection: It is find Variables and Constant. And Automatically deallocate from the memory 
