/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;

let weight = 180;

if (weight <= 150) {
    console.log("you are slim")
} else if (weight <= 190) {
    console.log("you are in shape")
} else{
    console.log("you need to start working out")
}




// TODO 2: Nested if with two numbers

let number1 = 10
let number2 = 20

if (typeof number1 == 'number' && typeof number2 == 'number') {

if (number1 == number2)
    console.log("numbers are equal"){

} else if (number1 > number2) {
    console.log ("Number 1 is greater")

}else {
    console.log("number 1 is smaller")
}


}

// TODO 3: Switch statement for language greeting

let ticker = "AAPL"; 

switch (ticker) {
  case "AAPL":
    console.log("AAPL is in the Technology industry. Known for iPhones, Macs, and services.");
    break;

  case "XOM":
    console.log("XOM is in the Energy industry. ExxonMobil focuses on oil, gas.");
    break;

  case "JPM":
    console.log("JPM is in the Financial Services industry. JPMorgan Chase is a major global bank.");
    break;

  default:
    console.log("Ticker not recognized. Try AAPL, XOM, or JPM.");
}





// TODO 4: While loop (1 to 10)
let count = 1;
while(count <= 10) {
    console.log("VALUE: ", count);
    count++;
}


// TODO 5: Do..while loop (1 to 5)
let i = 1;
do{
    console.log("VALUE: ", i);
} while (i <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for(let count = 1; count <= 20; count++) {
    if (count == 10) {
        console.log("TEN")
        
    } else if (count == 20) {

    } else[
        console.log("VALUE: ", count);
    ]
}
// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
