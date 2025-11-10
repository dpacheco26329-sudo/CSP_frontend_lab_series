/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
let isStudent = true
let hasLicense = false
// - Print results of true || false, true && false, !true
console.log(true || false)
console.log(true && false)
console.log(!true)
// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)

// TODO 3: Undefined
// - Declare variable grade and print it

let grade;
console.log(grade)
// TODO 4: Null
// - Create city = null, print it

let city = null
console.log=(city)


// - Reassign city = "Miami" and print again

 city = "Miami"
console.log(city)

// TODO 5: Immutability
// - Create word = "hello"
let word = "hello"

// - Try word[0] = "H", print word
charAt(word[0])
console.log(word)

// - Reassign word = "Hello" and print again

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
