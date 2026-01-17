// Loupe websites
// class -3
// Today's Topic is :
// 1.Performance:
        // How to measure speed of code
        // How to write efficient & performing code
// 2.Event Loop

// <---------------------------------------------------------------------------------------------->



// NOTE :
// Standard way to measure how long your code taken to run.
// using performance.now().
// performance.now() : provide timestamp to measure the speed and time taken by the code.

// Reflow : recalculates the layout (size and position) of elements,
// while Repaint :  only redraws their visual appearance without changing layout.



// Document Fragment :
//performance.now();
        // A DocumentFragment is a lightweight,temporary container used to build and modify DOM elements
        // off-screen before inserting them into the main document,which improves performance by reducing reflows and repaints.


// The Call Stack :
        // JS is a single threaded language.
        // Single Threaded means processing of one command at a time.
                // Observation :
                // 1.'run-to-completion' nature to code
                // 2. JS does not execute multiple line/funcn at the same time.



// The Event Loop :The event loop is a mechanism that continuously checks the call stack and task queues and
                // pushes asynchronous callbacks to the call stack when it is empty, allowing JavaScript to run non-blocking code.

                // 1.Synchronous : Synchronous execution means code runs step by step in sequence,
                                // where each operation must finish before the next one starts.

                                 // Synchronous means : Occuring at the same time.


                // 2.Asynchronous : Asynchronous execution means code runs **without blocking**, 
                                // allowing other operations to continue while waiting for tasks like timers,
                                //  promises, or network requests to complete.

        // In event loop we need to understand 3 things 
            // 1.Call Stack
            // 2.Browser
            // 3.Event Queue

                // Examples :
                    // console.log("Hi");
                    // Element.addEventListener('click',function(){
                    //     console.log("ABCDE..");
                    // });
                    // comnsole.log("Bye");

        // Go to loupe and visualize the event loop (Synchronous and Asynchronous call/funcn)

        // A bit more :
            // 1. Async code : uuse JS Event loop
            // 2. Async code is Handling by browser 
            // 3. whenever call stack is empty code move to queue,queue to callStack and gets executed.



// setTimeOut() method :setTimeout() is a JavaScript function that executes a specified callback function
                        // after a given delay (in milliseconds) without blocking the rest of the code.









//Adding 100 paragraph to document :

// let t1=performance.now();
for(let i=1;i<=100;i++){

    // let myElem=document.createElement('p');
    // myElem.textContent="I am a paragraph "+ i;

    // document.body.appendChild(myElem);
} 
// let t2=performance.now();
// console.log("This took "+(t2-t1)+"ms");




// Optimised Code :

// let t3=performance.now();
// let myDiv=document.createElement('div');

function para(){
    // console.log("You clicked on paragraph");
}

// myDiv.addEventListener('click',para);

for(let i=1;i<=100;i++){

    // let myElem=document.createElement('p');
    // myElem.textContent="I am a paragraph "+ i;

    // myDiv.appendChild(myElem);
}

// document.body.appendChild(myDiv);
// let t4=performance.now();
// console.log("This took "+(t4-t3)+"ms");





// Document Objects :
//performance.now();

// let t5=performance.now();
// let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++){

    // let myElem=document.createElement('p');
    // myElem.textContent="I am a paragraph "+ i;

    // fragment.appendChild(myElem);
} 
// document.body.appendChild(fragment);
// let t6=performance.now();

// console.log("This took "+(t6-t5)+"ms"); //1-Reflow and 1-Repaint



// Call Stack :
// Single threaded means :
// Observation :
    // 1.'run-to-completion' nature to code
    // 2. JS does not execute multiple line/funcn at the same time.
function para1(){

    // let myElem = document.createElement('p');
    // myElem.textContent="This is my first Para!..";

    // document.body.appendChild(myElem);
}

function para2(){

    // let myElem=document.createElement('p');
    // myElem.textContent="This is my second Para!..";

    // document.body.appendChild(myElem);
};

para1();
para2();



// setTimeOut() methdo...
// setTimeOut(funcn,time) :
setTimeout(function(){
    // console.log("Hello Dunia!");
},5000);


// When we trying to defer something until the stack is clear.
setTimeout(function(){
    // console.log("Hello Dunia!");
},0);

