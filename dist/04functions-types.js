"use strict";
/* this function return a number (implicit type) */
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 3));
/* this function return a string (implicit type) */
function add1(n1, n2) {
    return n1.toString() + n2.toString();
}
console.log(add1(2, 3));
/* explicit return type */
//number
function add3(n1, n2) {
    return n1 + n2;
}
console.log(add3(2, 3));
//string
function add4(n1, n2) {
    return n1.toString() + n2.toString();
}
console.log(add4(2, 3));
/* a function can return "void" */
function printResult(num) {
    console.log(`Result: ${num}`);
}
printResult(55);
/* a variable can get a "Function" type */
let combineValues;
combineValues = add;
combineValues = printResult;
/* explicit Function type with parameters */
let combineValues2;
combineValues2 = add;
//combineValues2 = printResult;  //will cause an error because it takes one input number and return a void
/* function types and callback */
function addAndHandler(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//meth2 explicit
function addAndHandler2(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
const callback1 = (num) => {
    console.log(num);
};
const callback2 = (num1, num2) => {
    console.log(num1, num2);
};
//we can call our addAndHandler with callback1 only , with callback2 it will throw an error in compilation
addAndHandler2(8, 3, callback1);
//addAndHandler2(8, 3, callback2);
