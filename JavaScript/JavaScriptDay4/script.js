// Function:Block of Code that fulfills the specific task.
//  syntax:
        //   function funcName(){
        //     //code
        //   }  


// Note : Hoisting is the process of moving function declaration to the top of the file. done automatically by json file. 

// 2.Rest Operator---->(...)
// 3.Default Parameter
// 4.getter setter
// 5.try & catch
// 6.scope
// 7.Reducing an Array


console.log("Kaise ho sare!..");

helloDunia();

// 1.function declaration
function helloDunia(){
    // console.log("Hello Dunia!...");
}

// 2.Named function assignment
let assign=function Assignment(){
    // console.log("I am a function assignment!..");
};
// console.log(assign());


// 3.Anonymous Function Assignment
let anonymous=function(){
    // console.log("Anonymous function");
};
// anonymous();

function sum(a,b){
    return a+b;
}

// console.log(sum(10,20));
// console.log(sum(10));
// console.log(sum());

let totalSum;
function calSum(a,b){
    totalSum=0;

    for(let val of arguments){
        totalSum+=val;
    }

    return totalSum;
}
// console.log(calSum(10,20,30,40,50));



// 2.Rest Operator
// return output is Array
function restOperator(...args){
    // console.log(args);
}
// restOperator(1,2,3,4,5);




// 3.Default Parameter
let p, r,y;
function simpleInt(p,r=5,y=10){
    // console.log(p*r*y/100);
}
// simpleInt(1000);





// 4.Getter and Setter
let students={
    fName:'Suraj',
    lName:'Kumar',

    get fullName(){
        return `${this.fName} ${this.lName}`;
    },

    set fullName(val){
        let parts=val.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
}
// console.log(students.fullName);
// students.fullName='Rahul Kumar';
// console.log(students.fullName);




// 5.try & catch
let student={
    fName:'Suraj',
    lName:'Kumar',

    get fullName(){
        return `${this.fName} ${this.lName}`;
    },

    set fullName(val){
        if(typeof val !== String){
            throw new Error("You have not sent a String");
        }
        let parts=val.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
}

// try{
//     student.fullName=true;
// }catch(e){
//     alert(e);
// }

// console.log(student.fullName);



// 6.Scope
{
    let a =10;
    var b=10;
}
// console.log(b);
// console.log(a);




// 7.Reducing an Array
let arr=[1,2,3,4,5,6];
// let totalSums=0;

// for(let val of arr){
//     totalSums+=val;
// }
// console.log(totalSums);

// using reduce funcn
let totalSums=arr.reduce((accumulator,currVal)=>accumulator+currVal,0);
console.log(totalSums);