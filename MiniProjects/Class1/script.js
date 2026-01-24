let inputSlider = document.querySelector("[data-lengthSlider]");
let lengthDisplay=document.querySelector("[data-lengthNumber]");

let passwordDisplay = document.querySelector("[data-passwordDisplay]");
let copyBtn = document.querySelector("[data-copy]");
let copyMsg = document.querySelector("[data-copyMsg]");
let uppercaseCheck = document.querySelector("#uppercase");
let lowercaseCheck = document.querySelector("#lowercase");
let numbersCheck = document.querySelector("#numbers");
let symbolsCheck = document.querySelector("#symbols");
let indicator = document.querySelector("[data-indicator]");
let generateBtn = document.querySelector(".generateButton");
let allCheckBox = document.querySelectorAll("input[type=checkbox]");
let symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";


let password="";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength color to grey
setIndicator("#ccc");



// set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=( (passwordLength-min)*100/(max - min) )+"% 100%";
}

// set indicator color
function setIndicator(color){
    indicator.style.backgroundColor = color;
    // homework hai shadow khud se set krna hai 
    indicator.style.boxShadow=`0px 0px 12px ${color}`;
}

// Rndm integer
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

// generate Rndm number 
function generateRandomNumber(){
    return getRndInteger(0,9);
}

// generate Rndm lowercase
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

// generate Rndm upperCase
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

// generate Rndm Symbols
function generateRandomSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum); 
}


// set strength color cal
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if( uppercaseCheck.checked) hasUpper = true;
    if( lowercaseCheck.checked) hasLower = true;
    if( numbersCheck.checked) hasNum = true;
    if( symbolsCheck.checked) hasSym = true;

    if( hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");
    } else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    } else{
        setIndicator("#f00");
    }
}


// copied function
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }catch(e){
        copyMsg.innerText = "failed";
    }

    // to make the span visible
    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

// shuffle 
function shufflePassword(array){
    // fisher yates methods
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}


function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });

    // Special condn
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider(); 
    }
}

// Generate Password btn
allCheckBox.forEach( (checkbox) =>{
    checkbox.addEventListener('change',handleCheckBoxChange);
});



// input slider 
inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

// Copy btn
copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

// Generate btn
generateBtn.addEventListener('click',()=>{
    // none of the checkboxes are selected..
    if(checkCount <= 0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // lets start the journey to find the new password...
    
    // remove the old password
    password = "";

    // lets put the stuff's mentioned by checkbox

    // if(uppercaseCheck.checked){
    //     password += uppercaseCheck();
    // }

    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked){
    //     password += generateRandomSymbol();
    // }

    // Another way..

    let funcArr = [];

    if(uppercaseCheck.checked){
        funcArr.push(generateUpperCase);
    }

    if(lowercaseCheck.checked){
        funcArr.push(generateLowerCase);
    }

    if(numbersCheck.checked){
        funcArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked){
        funcArr.push(generateRandomSymbol);
    }

    // select the checked checkbox (compulsory addition)
    for(let i=0;i<funcArr.length;i++){
        password += funcArr[i]();
    }


    // remaining addition
    for(let i=0; i<passwordLength-funcArr.length;i++){
        let randIndex = getRndInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    // shuffle the password
    password = shufflePassword(Array.from(password));

    // show in UI
    passwordDisplay.value = password;
    // calculate strength
    calcStrength();


})