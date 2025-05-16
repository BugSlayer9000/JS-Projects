// samod subhasha
// Number guessing Game

// get the values 

const numIn = document.getElementById("NumIn"); // Gets the Input
const submit = document.getElementById("submit"); // Submit Button
const hint = document.getElementById("hint"); // Hint Show
const guessedNum = document.getElementById("guessedNum"); // Correct Number show
const attempts = document.getElementById("attempts"); // Show attempts
let count = 0; // to count the attempts
let userNum;



 
let ranNum = Math.floor(Math.random() * 10) + 1 


submit.onclick = function(){ // Recognice the click
    // Input Validaion
    userNum = numIn.value
    if(userNum === "" || isNaN(userNum)){
        hint.textContent = `Input Not Valid`
        count++;
        attempts.textContent = `${3-count} Left`
    }
    else{
        userNum = Number(userNum)
    };

    // get the random number and compare it with the input
    hint.textContent = `${ranNum}`

    if(count<3){
        if(userNum > ranNum && count < 3){
            count++;
            hint.textContent = `Try a lower Value`
            attempts.textContent = `${3-count} Left`
        }
        else if(userNum < ranNum && count < 3){
            count++;
            hint.textContent = `Try a Higher Value`
            attempts.textContent = `${3-count} Left`
        }
        else{
            hint.textContent = `You Guessed Right !`
            guessedNum.textContent = `${ranNum}`
        }
    }
    else{
        hint.textContent = `No attempts left`
        attempts.textContent = `None left`
        guessedNum.textContent = `${ranNum}`
    }


};





