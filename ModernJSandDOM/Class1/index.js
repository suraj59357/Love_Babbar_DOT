// 1.window: It is a gloabl Object and  created by browser.
            // It is represent the browser windows
            // DOM,BOM and JS-Core lies in windows
            // It is top level entity. 


// 2.DOM: Stand for Document Object Model.
    //when we converted Html file into JS object is called documents object model. 
    // Html file converted into tree like structure.
    // examples:<html>
                        // <head></head>
                        // <body></body>
                //</html>
            
                //html: it is just a character.
                // Character converted into tags and tags converted into tokens
                // and tokens converted into Nodes and Nodes converted into Documents. 

// 3.BOM:BOM stands for the Browser Object Model, a collection of objects 
        // that allows JavaScript to interact with the web browser 
        // and its environment, outside of the actual content of the web page.



// DOM Method use to Access element 
    //1.getElementby
        // 1.getElementbyID('');
                //It is called on demand Object.
                // It return a single Object.


        // 2.getElementsbyClassName('');
        // 3.getElementsbyTagName('');

                // Both method use document Objects.
                // Both return multiple items.
                // The list return is not an Array.

        // Homework: $0;


    // 2.querySelector('');
        //querySelector('#idName'); //return: single Objects
        // querySelector('.className'); //return: firstOne
        //querySelector('tagName');  //return : firstOne

    // 3.querySelectorAll('');
        //querySelectorAll('#idName');
        // querySelectorAll('.className');
        //querySelectorAll('tagName'); 


    // 4.In WebPages
        //updates Existing Content
            // 1. .innerHTML
                    //get an element/all of its descendence HTML Content.
                    //set an element's HTML content

            // 2. .outerHTML:Homework


            // 3. .textContent
            // 4. .innerText
                    // Both get & set textual Content.

            //Homework: Difference between .innerText vs .textContent
            // .innerText :examples
                    // Returns only visible text
                    // Respects CSS styles (display: none)
                    // Triggers reflow (slower)
                    // Reads text as user sees it

            // .textContent :examples
                    // Returns all text (visible + hidden)
                    // Ignores CSS
                    // Faster (no reflow)
                    // Returns text exactly as in DOM



    // Adding new Element/Content using JS in html
    // 5. .createElement();
            // examples:
            // let content=document.getElementbyID('');
            // let newChild=document.createElement('span');
            // content.appendChild(newChild);



    // Creating textNode
    // 6. .createTextNode('content');
        // examples: 
            //let newPara = document.createElement('p');
            //let textPara = document.createTextNode(" I am a para");
            //newPara.appendChild(textPara);  

    // <------Shortcut of .createTextNode('Content');-------->
    // This shortcut add new element and content in the last 
    //if div have inside multiple tag <div><a></a><button></button></div> 
    // examples:
        // let content=document.getElementbyID('idName');
        // let myPara=document.createElement('p');
        // myPara.textContent="I am a single para";
        // content.appendChild(myPara);



    // Inner adjacent html
    // 7. .innerAdjacentHTML();
            // It has to be called 2 arguments.
            // 1.Location/position. (where)
                    //There exist 4 value
                    // 1.beforeBegin
                    // 2.afterbegin
                    // 3.beforeEnd
                    // 4.afterEnd

            // 2.Html text/content to be inserted. (what)
    


    // Remove-->
    // 8. .removeChild()
            // opposite of appendChild();
            // we should know:
                //1.which parent element have to remove.
                //2.which child element have to remove.
            // ex: parent.removeChild(''childElement');

            // Homework shortcut of .removeChild()


        // 9.Using JavaScript we can change the style of CSS
        // Style page content
                // 1. .style: It style only one property at a time.
                        // ex:
                        // let content=$0;
                        // content.style.color='blue';
                        // content.style.bg-color='white';

                // 2. .cssText
                        // ex:
                        // content.style.cssText='color:red;bg-color:yellow;';

                // 3. .setAttribute
                        // content.setAttribute("style","background-color:red;");

                // 4. .className
                        // content.classname;
                        // content.className.split(' ');
                        // content.classname.trim().split(' ');

                // 5. .classList
                        // 1.return an Array of classes
                        // Homework
                        // 2.add();
                        // 3.remove();
                        // 4.toggle();
                        // 5.contain();

                        // content.classList;
                        // typeof content.classList;