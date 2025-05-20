// samod subhasha
// 19/05/2025
// password genarator

// uppercase
// lowercase
// numbers
// symbols



function genarate(){
    const pw = document.getElementById("password"); // store the pw here 


    const uppercase = document.getElementById("upperCase");
    const lowercase = document.getElementById("lowerCase");
    const numbers = document.getElementById("numbers"); 
    const symbols = document.getElementById("symbols");

    let upperCaseIn = uppercase.checked ? true : false;
    let lowerCaseIn = lowercase.checked ? true : false;
    let numbersIn = numbers.checked ? true : false;
    let symbolsIn = symbols.checked ? true : false;

    if(!upperCaseIn && !lowerCaseIn && !numbersIn && !symbolsIn){
        pw.textContent = `Must tick one of the conditions below`;
    }

    let legnthofPW = Number(document.getElementById("NumofChar").value);

    // items for the pw generator
    lower = "abcdefghijklmnopqrstuvwxyz";
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    num = "0123456789";
    sym = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
    
    // genarate a new string of choosen items 
    let pwKey = ``;
    pwKey += upperCaseIn ? upper : ``;
    pwKey += lowerCaseIn ? lower : ``;
    pwKey += numbersIn ? num : ``;
    pwKey += symbolsIn ? sym : ``;

    let genratedPw = ``; // password goes here 

    // a for loop to iterate as the amount of chars we need 
    for(let i = 0; i < legnthofPW; i++){
        // get a random char from the pwkey and put it in as the pw
        let ranchar = Math.floor(Math.random() * pwKey.length) ;
        genratedPw += pwKey[ranchar];
    }

    pw.textContent = `Your Generated password = ${genratedPw}`;

    if(!upperCaseIn && !lowerCaseIn && !numbersIn && !symbolsIn){
        pw.textContent = `Must tick one of the conditions below`;
    }

    // uncheck the checks 
    document.getElementById("upperCase").checked = false;
    document.getElementById("lowerCase").checked = false;
    document.getElementById("numbers").checked = false; 
    document.getElementById("symbols").checked = false;
};

