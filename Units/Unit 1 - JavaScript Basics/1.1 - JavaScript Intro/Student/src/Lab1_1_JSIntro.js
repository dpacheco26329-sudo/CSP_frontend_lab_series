/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Brody Dennis")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
favoriteFood = "Pizza"
// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "clue";
console.log(typeof mystery);
mystery = 42;
console.log(typeof mystery)



// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";


// TODO 5: Create three valid camelCase variables and print them
let quarterBack;
let pointGuard;

pointGuard = "Dwyane Wade";
let classRoom = "L12"


// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 17; // declared and initialized
console.log(`I am ${age} years old`)


/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   how to declare and initalize variables
   2. What challenges did you encounter, and how did you solve them?
   Using camelCase and also making sure to not write let over and over again
   3. Where else could this programming concept be useful?
   it can be useful in your everday life; be structured

   =========================================================== */


   // Mini FRQ

   // declaring and initalizing

   let width = 10;
   let height = 6;

   //computing area and perimter

   let area = width * height;
   let perimeter = 2 * (width + height);

   console.log(`The area is ${area}`) //template literals
   console.log ("The perimeter is " + perimeter); //string

