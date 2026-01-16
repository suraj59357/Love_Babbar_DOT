// 1.Browser Events : A browser event is an action or occurrence (like a click, key press, page load, or mouse movement) 
                    // that happens in the browser and can be detected and handled by JavaScript.
    // 1.what is Event?
    // 2.Respond to Event.
    // 3.data stored in event.
    // 4.stop an event 
    // 5.lifecycle of Event.

    // Browser events always hidden or invisible.
    // if we want to see we can use monitorEvents() method.
            // ex:monitorEvents(document);
    // if we don't want to see event we can use unmonitorEvents() method.





// EventListener:- An event listener is a JavaScript function that waits for a specific event (such as a click or key press)
                //  to occur on an element and then executes code in response to that event.

            //Classes : It is blueprint of an object.
            // Objects : Objects is real world entity.
            // interface : In JS, interface is a blueprint.

    // 1.eventTargets : 
        // It is a top level interface. 
        // It is an interface which is implemented by Objects that can receive events & may have events listeners for them. 
        // There are three types of methods in EventTarget.
        // 1. .addEventListeners()
                // 1.listen to event 
                // 2.respond to event
                // 3.hook into event
        // 2. .removeEventListener()
        // 3. .dispatchEvents(). 

    // 2.node : node is inherited by eventTargets 
    // 3.element (<p>content</p>) : element is inherited by Node.

    // eventTarget <-------- node <------- element.



    
// PseudoCode:
    // <EventTarget>.addEventListeners(<event-to-listen-for>,</function-to-run-where-event-happened>)</EventTarget>
            // 1.event-target --> Component(documents,p,div,articles,video).
            // 2.event-type --> (click,dblClick,scroll etc.)
            // 3.function --> define what to do when event happens

    // 1. .addEventListeners()
                // 1.listen to event 
                // 2.respond to event
                // 3.hook into event

            // 1.examples:
            // document.addEventListener('click',function(){
            //     console.log("I clicked on documents");
            // });

            // 2.examples:
            // let content = document.querySelector('h1');
            // content.addEventListener('click',function(){
            //      content.style.background = 'red'; 
            // });




    // 2. .removeEventListener()
            // before this we revise previous concept
            // 1. == : It checks only the value.
                    // It allow type coercion.
                    // Type Coercion : where JS will try to convert the item being compared to the same type.

            // 2. === : It checks both valu and type.

        // Examples:
            // 1.examples:
                // document.addEventListener('click',function(){
                //     console.log("Hi");
                // });

                // document.removeEventListener('click',function(){
                //     console.log("Hi");
                // });

        //note : We can not remove able to remove this bcoz funcn are Objects in JS.


        // .removeEventListener() have 3 things
            // 1. same target
            // 2. same type
            // 3. same funcn

            // 2.example
                // function printHi(){
                //     console.log("Hi There!..");
                // };

                // document.addEventListener('click',printHi);
                // document.removeEventListener('click',printHi);

    // Homework
    // 3. .dispatchEvent() 




// Phases of an Event
    // 1.capturing phase 
    // 2.At target phase 
    // 3.bubbling phase

    // examples 
        //  <html>
        // <head>
        // </head>
        // <body>
        //     <p>Hello Jee! Kaise ho Sare!...</p>
        // </body>
        // </html>}
    
    // I want  to add listener in paragraph tag
    // 1.capturing phase : <html> ---> <head> ---> <body> --> <p>
    // 2.At target phase :  <p>
    // 3.bubbling phase  : <p> ---> <body> ---> <head> ---> <html> 



    // bubbling phase :
    // byDefault .addEventListener() execute on bubbling phase.

    // capturing phase :
    // <EventTarget>.addEventListener(type,listener,true);
            //type : what (click,dblClick,scroll etc.).
            // listener : what should happen after event triggers (func()).
            // true : useCapture (for capturing phase); 
    // if we want to add event in capturing phase we can set true
        // addEventListener('click',print,true);

    // At target phase :
    // Homework
    // Ky mai At target mai bhi event listener laga sakta hu




//The Event Object:
    // An event object is an object automatically created by the browser that contains detailed information about an event
    // (such as the event type, target element, and key or mouse data) and is passed to the event handler.

    // Another definition :
    //  when an event occur, .addEventListener() funcn receive event Objects.
    // in Event Object There is alot of information about event.




// The Default Action:A default action is the browser’s automatic behavior that occurs when a specific event happens (such as a link opening or a form submitting).
// .preventDefault();
// Examples:
    // let links=document.querySelectorAll('a');
    // let thirdLinks=links[2];
    // thirdLinks.addEventListener('click',function(events){
    //     events.preventDefault();
    //     console.log("Maza AA Gy!...");
    // });



// Avoid too  many Event


// Homework:
// DOMContentLoaded






// console.log("Hello Dunia!..");

// 1. .addEventListeners()
document.addEventListener('click',function(){
    // console.log("Hi");
});

// 2. .removeEventListener()

function printHi(){
    // console.log("Hi There!..");
};

document.addEventListener('click',printHi);
document.removeEventListener('click',printHi);


// The Event Object
let para = document.querySelector("#wrapper");
para.addEventListener('click',function(event){
    // console.log(event)
});


// The Default Action
let links=document.querySelectorAll('a');
let thirdLinks=links[2];
thirdLinks.addEventListener('click',function(events){
    events.preventDefault();
    // console.log("Maza AA Gy!...");
});




// Avoid too  many Event
// let myDiv=document.createElement('div');
// for(let i=1;i<100;i++){

//     let myElem=document.createElement('p');
//     myElem.textContent="I am Paragraph " + i;

//     myElem.addEventListener('click',function(event){
//         console.log("I have Clicked on Para",i);
//     });

//    myDiv.appendChild(myElem);
// };

// document.body.appendChild(myDiv);



// Avoid too  many Event Optimization Code
// let myDiv=document.createElement('div');
// function paragraph(event){
//         console.log("I have Clicked on Paragraph!..");
//     }
// for(let i=1;i<100;i++){

//     let myElem=document.createElement('p');
//     myElem.textContent="I am Paragraph " + i;

//     myElem.addEventListener('click',paragraph);

//    myDiv.appendChild(myElem);
// };

// document.body.appendChild(myDiv);



// Avoid too  many Event more Optimized Code
// let myDiv=document.createElement('div');

// function paragraph(event){
//         console.log("paragraph, "+ event.target.textContent);
// }

// myDiv.addEventListener('click',paragraph);

// for(let i=1;i<100;i++){

//     let myElem=document.createElement('p');
//     myElem.textContent="I am Paragraph " + i;

//     myDiv.appendChild(myElem);
// };

// document.body.appendChild(myDiv);



// examples:
// In specific tag filtering using .addEventListener().
let content = document.querySelector('#article');
content.addEventListener('click',function(event){

    if(event.target.nodeName === 'SPAN'){
        console.log("span me click kia "+event.target.textContent);
    }
    
});