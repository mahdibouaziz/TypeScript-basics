"use strict";
/* the unknown type  */
//this mean that we don't know yet what the user will eventually enter
// we can store any value without getting errors
//it's kind of the "any" type but it diffrent
let userInput;
userInput = 5;
userInput = "testType";
let userName;
//this will throw an error because unknows won't garantuate that the  value is string
//userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
// but any disable any type checking
/* the never type */
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("an error", 500);
console.log(result);
