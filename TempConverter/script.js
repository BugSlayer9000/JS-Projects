// samod subhasha
// 16/05/2025
// temp converter 

// get the elements first

const numIn = document.getElementById("numIn") ;
const toFarenheight = document.getElementById("toFarenheight") ;
const toCelcius = document.getElementById("toCelcius");
const submit = document.getElementById("Submit");
const result = document.getElementById("result");
let temp;

function converter(){
    if(toFarenheight.checked){
        temp = Number(numIn.value);
        // add the f to c formula
        console.log(typeof(temp))
        FtoC = temp - 32 * 5/9
        result.textContent = FtoC.toFixed(1) + " Celsius"
    }
    else if(toCelcius.checked){
        temp = Number(numIn.value);
        
        // add the c to f value
        cToF = temp * 5 / 9 + 32
        result.textContent = cToF.toFixed(1) + " Fahrenheit"
    }
    else{
        result.textContent =`Select an Option`
    }
};
