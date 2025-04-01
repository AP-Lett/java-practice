///////////////////conditionals

// let age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// const day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the work week!");
//     break;
//   case "Tuesday":
//     console.log("It's only Tuesday...");
//     break;
//   case "Wednesday":
//     console.log("Mid-week hustle!");
//     break;
//   default:
//     console.log("Enjoy your day!");
//     break;
// }

// condition ? if it's true : else do this

// const age = 16

// const canDrive = (age >= 16) ? "Yes" : "No";
// console.log(canDrive);

// for loop
// for (initialization; condition; finalExpression) {

// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// while loop
// while (condition) {

// }

// let count = 0;

// while (count < 3) {
//   console.log("Count is:", count);
//   count++
// }

// do loop 
// do {

// } while (condition);

// let number = 5;

// do {
//   console.log("Number is:", number);
//   number--
// } while (number > 0);

// looping through an object 
// const person = { name: "Audreana", age: 26 };

// for (let key in person) {
//   // console.log(key)
//   // console.log(person[key])
//   console.log(key, "=", person[key]);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) { // make sure to use of instead of in - in gets the indexes rather than the value
//   console.log(fruit);
// }

// const string = "test";

// for (let char of string) {
//   console.log(char);
// }

// let num = [0, 1, 2, 3];
// let sliced = num.slice(1, 3);
// console.log(sliced);
// console.log(num);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log(number * 2);
// });


// const squares = numbers.map((number) => number ** 2);
// console.log(squares);

// const evenNumbers = numbers.filter((number) => (number % 2) === 0);
// console.log(evenNumbers);


// const sum = numbers.reduce((total, number) => total + number, 0);
// console.log(sum);

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 500 },
  { name: 'Headphones', price: 150 },
];
const expPro = products.filter((product) => product.price > 500)

// console.log(expPro);

const expensiveProducts = products.filter((product) => product.price > 500);

// console.log(expensiveProducts);

const discountedProducts = products.map((product) => ({
  name: product.name,
  price: product.price * 0.9
}));

// console.log(discountedProducts);

const totalPrice = products.reduce((total, product) => total + product.price, 0)

// console.log(totalPrice);