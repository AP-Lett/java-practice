// console.log("Hello Class");

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2);
// console.log(10 % 3);


// var:
// The original way to declare variables in JavaScript.
// Function-scoped or globally scoped.
// Accessible within the function in which it’s declared. If declared outside any function, it becomes globally scoped.
// Can be re-declared and updated.
// Modern JavaScript development rarely uses var due to its quirks and potential for scope-related bugs. However, if you’re working in legacy code or need to support very old browsers, you may still see or use var.


// var count = 10;
// console.log(count);
// if (count > 5) {
//   var result = "Greater than 5";
// }
// console.log(result);


// let:
// Introduced in ES6 (2015).
// Block-scoped.
// Only accessible within the block (e.g., {}) it’s declared in. This provides better control over variable scope and avoids accidental overwrites.
// Can be updated but not re-declared in the same scope.
// Use let for variables that you anticipate reassigning within a block or scope. It’s particularly useful for loops, conditionals, or situations where the variable’s value needs to change.


// let score = 0;

// if (true) {
//   let score = 100;
//   console.log(score);
// }
// console.log(score);

// const:
// Also introduced in ES6.
// Block-scoped.
// Cannot be updated or re-declared.
// Must be initialized at the time of declaration.
// Use const for variables whose values should not change after they are initialized. It’s great for configuration values, fixed data, or when you want to indicate that a value should remain constant throughout the program.
// const is generally preferred over let for any variable you don’t plan to reassign, as it can make code more predictable and easier to read.

// const test = 10;
// console.log(test);

// const user = { name: "Noah", age: 25 };
// console.log(user);
// user.age = 26
// user.name = "Test";
// console.log(user);

//////////////////////Exercise 1//////////////////////

// var


// var count = 7;
// console.log(count);

// if (count > 5) {
//   var result = "Greater than 5";
// }

// console.log(result);
// outcome:
// 7
// Greater than 5


// let count = 7;
// console.log(count);

// if (count > 5) {
//   let result = "Greater than 5";
// }

// console.log(result);
//outcome:
// 7
// RefferenceError: you cannot access the let variable outside the if block b/c it is not defined in the outer scope (block scope)

// let count = 7;
// console.log(count);

// if (count > 5) {
//   let result = "Greater than 5";
// }
// let result = "Greater than 5"; //only works b/c we defined result outside of the if-block
// console.log(result);
// outcome:
// 7
// Greater than 5

// const count = 7;
// console.log(count);

// if (count > 5) {
//   const result = "Greater than 5";
// }

// console.log(result);
//outcome:
// 7
// RefferenceError: you cannot access the let variable outside the if block b/c it is not defined in the outer scope (block scope)
// you cannot change the variable because it is a constant.

////////////////////////datatypes////////////////////////////

//number
// let count = 10;
// let price = 19.99

// console.log(typeof(count));
// console.log(typeof(price));

// NaN: not a number, example: infinity

//string
// let message = "Hello"
// console.log(typeof(message));

// boolean
// let isLoggedIn = true;
// let hasAccess = false;

// console.log(typeof(isLoggedIn));
// console.log(typeof(hasAccess));

// Symbol
// const id = Symbol('id');
// console.log(typeof(id));

// null
// let data = null;
// console.log(typeof(data));

//undefined
// let something
// console.log(typeof(something));

// array
// let numbers = [1, 2, 3, 4, 5]
// console.log(typeof(numbers));
// console.log(numbers[4]);
// numbers[2] = 10
// console.log(numbers);

// // object (tech. ruby hash)

// let person = {
//   name: "Audreana",
//   age: 26
// };

// console.log(person);

//////////////////////comparisson operators//////////////////////////////
// console.log(10 > 5);  // true
// console.log(10 < 5);  // false
// console.log(10 == "10"); // true (checks only value) loose equality
// console.log(10 === "10"); // false (checks value & type) strict equality
// console.log(10 !== 5); // true, opposit of ===
// console.log(10 != 5); // true, opposit of ==


////////////////////////logical operators//////////////////////////////
// console.log(true && false); // false (AND)
// console.log(true || false); // true (OR)
// console.log(!true); // false (NOT)

////////////////////////functions//////////////////////////////
// basic
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Charles"));

//arrow
// const greet = (name) => {
//   return "Hello " + name + "!";
// };

// console.log(greet("Damen"));
////////////////////////exercise 2//////////////////////////////

// sayHi = function greet(name) {
//   return "Hi " + name + " :)";
// }

// console.log(sayHi("Tracee"));
//outcome: Hi Tracee :)

// const greet = (name) => {
//   return "Hi " + name + " :)";
// }
// console.log(greet("Tracee"));
//outcome: Hi Tracee :)

// const b = 10
// const c = 5

// function add(x, y) {
//   return x + y;
// }

// console.log(add(b, c));
//outcome: 15

// const add = (a, b) => {
//   return a + b;
// }

// console.log(add(b, c));
//outcome: 15

////////////////////////SCOPE//////////////////////////////
// global scope 
// variables declared outside of any function or block
// available pretty much everywhere
// often risky if overused because global variables can be modified from anywhere which can lead to naming collisions or unexpected behavior

// var globalVariable = "I am a global variable";

// function showGlobal() {
//   console.log(globalVariable);
// }

// showGlobal();
// console.log(globalVariable);

// function scope 
// variables declared with var inside of a function 
// only available within that specific function - cannot be accessed outside of the function
// great for encapsulating logic and avoiding naming collisions

// function testScope() {
//   var functionVar = "I am inside a function";
//   console.log(functionVar);
// }

// testScope();

// console.log(functionVar);


// block scope 
// variables declared with let or const inside of a block ({}) 
// only available within that specific block
// can be if, loops, or any code wrapped in a {}

// if (true) {
//   let blockVar = 'I am block scoped';
//   const blockConst = 10;
//   console.log(blockVar);
//   console.log(blockConst);
// }

// console.log(blockVar);
// console.log(blockConst);


////////////////////////HOISTING//////////////////////////////

// asynchronous:
// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2");
// }, 2000);

// console.log("Step 3");

// function doHeavyCalculation() {
//   let sum = 0;
//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log("Start calculation...");
// console.log(doHeavyCalculation()); // synchronous & blocking
// console.log("End calculation.");

// function testScope() {
//   if (true) {
//     var a = "Using Var";
//     let b = "Using Let";
//     const c = "Using Const";
//   }
//   console.log(a);
//   console.log(b); //undfined because it is not defined outside of block(block scope)
//   console.log(c); //undfined because it is not defined outside of block(block scope)
// }

// testScope();


// // console.log(greeting);
// let greeting = "Hello im practicing hoisting";

// // console.log(message);
// const message = "I am confused";

// //cannot access because they are being declared AFTER they are called

// console.log(greeting);
// console.log(message);

// console.log(greeting); 
// //hoisted not initialized = undefined
// var greeting = "Hello im practicing hoisting";
// console.log(greeting);

// greet();
// function greet () {
//   console.log("Hi");
// }
//function declaration = fully hoisted

greet();
var greet = function () {
  console.log("Hi");
};


