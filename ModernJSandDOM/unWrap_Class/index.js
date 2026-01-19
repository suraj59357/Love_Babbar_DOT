let countValue = document.getElementById('count');

function increment(){
    let value = parseInt(countValue.innerText);

    if(value == 10){
        value = 10;
    }else{
        value++;
    }

    countValue.innerText=value;
}

function decrement(){
    let value = parseInt(countValue.innerText);

    if(value == 0){
        value = 0;
    }else{
        value--;
    }

    countValue.innerText=value;
}