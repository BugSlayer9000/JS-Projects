// Dice Rolling Program
// samod subhasha
// 19/05/25

function rollDice(){
    // Get the vlaues from html
    numIn = document.getElementById("numIn").value;
    diceResult = document.getElementById("diceResult");
    diceImages = document.getElementById("diceImages");
    warnMsg = document.getElementById("warning")

    // set the values
    let maximum = 6;
    let minimum = 1;
    
    
    // what do we need to do is genarate this times the input
    diceList = [];
    imageList = [];

    numIn = Number(numIn);

    if(numIn>10){
        warnMsg.textContent =  `You can't roll the dice more than 10 times! `
        diceResult.textContent = ``
        diceImages.innerHTML = ``
    }
    else{
        warnMsg.textContent = ``
        // a for loop to put the number if dices in a list 
        for(let i = 1; i <= numIn; i++){ // (initialization; condition; update)
        let random = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
        diceList.push(random);
        imageList.push(`<img src=Dices/${random}.png alt=dice${random}>`)
        };

        diceResult.textContent = diceList ; // showing the result 

        diceImages.innerHTML = imageList.join("");
    };
    
};