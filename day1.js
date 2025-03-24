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
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 == "10"); // true (checks only value) loose equality
console.log(10 === "10"); // false (checks value & type) strict equality
console.log(10 !== 5); // true, opposit of ===
console.log(10 != 5); // true, opposit of ==