// Class-4
// JS is a single threaded language.
// 1.synchronous funcn
// 2.Asynchronous funcn


// API : Application programming Interface.
        // An API is a set of rules that allows one software application to communicate and interact with another.
        // 2nd def :An **API** is a way for one software or app to **ask another software for data or actions and get a response**.
        // examples :You (Customer) → Application
                    // Waiter → API
                   // Kitchen → Server / Database





// Asynchronous :
// Features of Asynchronous code :
        // clean and concise
        // better error handling 
        // Easier debugging  
        // It does not block the execution of other code.
        // It allows multiple tasks to run at the same time.
        // It improves performance and responsiveness of applications.
        // It is commonly used for API calls, timers, and file operations.
        // It uses callbacks, promises, or async/await.
        // It keeps the UI smooth and interactive.






// Promises : koi bhi chij parallely execute karna chahte ho JS ke andhar background me. to hum promise ka use krte hai.
            // def: A Promise in JavaScript is an object that represents the future result of an asynchronous operation,
                    //  which can either be fulfilled, rejected, or pending.

            // Syntax : let prom = new Promise(callback func);
                    //in callback func : function(resolve,reject){//code}; 
                    
            //Promise return 2 things :
                    // 1.fullfilled
                    // 2.rejected 
                // we can apply method on it.
                    
            // We have two method in promise :
                    // if fulfilled : 1. .then() : it returns value .
                    // if rejected : 2. .catch() : it return an error.





// Async & Await :async and await are JavaScript keywords that make asynchronous code easier to read and write
                //  by allowing it to run like synchronous code while handling promises.
            // It is Special syntax used to work with promises.
            // It return Promise.




// fetch API :It is an tool which communicate between two software
            // It return Promise.
            // syntax : fetch(url , option);
                    // option means secret keys;
        
        // 1. get call by fetch API.
                   // syntax : fetch(url);


        // 2. post call by fetch API.
                   // syntax : fetch(url , option);


// Closure : A closure is created when a function remembers and can access variables from its outer function,
        // even after the outer function has finished executing.

    // nested func --->closure ----> references






// Homework :
    // Classes & Export Modules in JS








//<------------------------------------------------------------------------------------------->

console.log("Hello Dunia!..");


// Asynchronous code :

// setTimeout(()=>{
//     console.log("Ky haal hai!...")
// },3000);

// function printHello(){
//     console.log("Hello World!...");
// }

// console.log("Hii there!..");



// Promises :

// let newProm1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Promise1");
//     },5000);
//     //resolve(1999);
//     reject(new Error("Bhai shahab error hai appka code me!.."));
// });



// let newProm2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Promise2");
//     },3000);
//     //resolve(1999);
// })


// newProm1.then((val)=>{console.log(val)});
// newProm1.catch((error)=>{console.log("Received error!..")});

// newProm1.then((val)=>{console.log(val)},(error)=>{console.log("Received error!..")});


console.log("Bye Dunia!..");


//<------------------------------------------------------------------------------------------->

// let prom1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Prom1 completed after 2ms.");
//     },2000);

//     resolve(true);
// });

// let op=prom1.then(()=>{
//     let prom2=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Prom2 completed after 5ms.")
//         },5000);
//         resolve("prom2 resolved");
//     });
//     return prom2;
// });

// op.then((value)=>{console.log(value)});


//<------------------------------------------------------------------------------------------->
// Async & Await
async function utility(){
    let delhiMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delhi me abhi garmi hai bhai !...");
        },1500);
    });

    let keralaMausam = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Kerala me abhi cool mausam hai bhai!...");
        },3000);
    });

    let DM=await delhiMausam;
    let KM=await keralaMausam;

    return [DM,KM];

}

// console.log(utility());



//<------------------------------------------------------------------------------------------->

// fetch API
// 1. get call

async function getCall(){
    let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    // console.log(output);
}
// getCall();


// post call

async function postCall(){
    let options= {
            method: 'POST',
            body: JSON.stringify({
                title: 'Name',
                body: 'Suraj Kumar',
                userId: 1,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }

        let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
        let output =await content.json();
        return output;
}


async function output(){
    let ans =await postCall();
    console.log(ans);
}

// output();


//<------------------------------------------------------------------------------------------->
// Closure
// nested func --->closure ----> references

function closure(){
    let closeUp = "10rs";
    function closure2(){
        //let closeUp = "15rs";
        console.log(closeUp);
    }
    return closure2;
}

let func=closure();
func();