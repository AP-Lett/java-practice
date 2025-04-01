// Intro to Callbacks
////////////////////exercise 1 part 1

// function delayedGreeting(name, delay, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }, delay);
// }

// delayedGreeting("Jane", 2000, () => {
//   console.log("Greeting complete!");
// });

// delayedGreeting("John", 1000, null);
// delayedGreeting("Johan", 1000);

// example:
// function delayedGreeting(name, delay, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     if (callback) {
//       callback();
//     }
//   }, delay);
// }

// // Example usage:
// delayedGreeting('Alice', 1000, () => {
//   console.log('Greeting complete!');
// });
////////////////////exercise 1 part 2
// example: 
// 1) Get user name (simulated)
// function getUser(callback) {
//   setTimeout(() => {
//     const userName = 'Bob';
//     console.log('Fetched user:', userName);
//     callback(userName);
//   }, 1000);
// }

// // 2) Build a welcome message
// function getWelcomeMessage(name, callback) {
//   setTimeout(() => {
//     const message = `Welcome, ${name}!`;
//     callback(message);
//   }, 1000);
// }

// // Chaining them together
// getUser((userName) => {
//   getWelcomeMessage(userName, (welcomeMsg) => {
//     console.log('Final message:', welcomeMsg);
//   });
// });


// function getUser(callback) {
//   setTimeout(() => {
//     console.log("Fetching User:");
//     const user = "Jane";
//     callback(user)
//   }, 2000);
// }

// function getWelcomeMessage(user, callback) {
//   setTimeout(() => {
//     console.log(`Welcome ${user}!`);
//     callback();
//   }, 2000);
// }

// getUser((user) => {
//   getWelcomeMessage(user, () => {
//     console.log("User has been welcomed");
//   });
// });


////////////////////////////Exercise 2
// Exercise:
// Random Result Promise

// Goal: Simulate a short asynchronous task using setTimeout, resolving or rejecting randomly.

// Write a function randomResult() that returns a Promise. Inside it:
// Use Math.random() to produce a 0–1 value.
// After 1 second (setTimeout), resolve if the number is above 0.5, reject otherwise.

// function randomResult () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       console.log(`Random number = ${randomNumber}`);

//       if (randomNumber > 0.5) {
//         resolve("Sucess! Your number is greater than 0.5.");
//       } else {
//         reject("Failure: Your number is lower than 0.5.");
//       }
//     }, 1000);
//   });
// }

// randomResult()
//   .then((message) => {
//     console.log(message); 
//   })
//   .catch((error) => {
//     console.log(error);
//   })



///promis chaining
// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// add(2, 5)
//   .then((sum) => {
//     console.log('Sum', sum);
//     return add(sum, 4);
//   })
//   .then((newSum) => {
//     console.log('New Sum', newSum);
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   })

/////////////////////////////exercise 3 part 1
// Exercise 1: Chaining Two Simple Promises
// Goal: See how returning a promise from the first .then() feeds into the second .then().
// Define two functions that return Promises – each uses setTimeout to simulate an async operation:

// function getUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetching user data..");
//       resolve("User Data: Jane");
//     }, 1000);
//   });
// }

// function processData(userData) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Processing ${userData}`);
//       resolve(`${userData} successfully processed`);
//     }, 1000);
//   });
// }


// getUserData()
//   .then((userData) => {
//     console.log(userData);
//     return processData(userData);
//   })
//   .then((processedData) => {
//     console.log(processedData);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
  // });
/////////////////////////////exercise 3 part 2

// function fetchAnimalData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Fetching animal data....");
//       resolve({
//         name: "Ruger",
//         species: "Canine",
//         breed: "Labrador Retriever"
//       });
//     }, 1000);
//   });
// }

// fetchAnimalData()
//   .then((animal) => {
//     console.log(`Animal Data: Name-${animal.name}, Species-${animal.species}, Breed-${animal.breed}.`);
//     return `${animal.name} is assigned as: Good Boy.`;
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

/////////////////////////////exercise 3 part 3
// function part1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("A long time ago, in a galaxy far, far away...");
//     }, 4000);
//   });
// }


// function part2(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " there was a young Jedi named Luke Skywalker.");
//     }, 4000); 
//   });
// }


// function part3(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " But lurking in the shadows, was the dark lord, Darth Vader.");
//     }, 4000);
//   });
// }


// function part4(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " Darth Vader was planning to destroy the Rebel Alliance with the powerful Death Star.");
//     }, 4000);
//   });
// }


// function part5(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " But Luke Skywalker, with the guidance of Obi-Wan Kenobi, was learning the ways of the Force.");
//     }, 4000); 
//   });
// }


// function part6(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " Eventually, Luke faced Darth Vader in an epic battle to save the galaxy.");
//     }, 4000); 
//   });
// }


// function part7(previousMessage) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(previousMessage + " With his bravery and the power of the Force, Luke destroyed the Death Star and brought peace to the galaxy.");
//     }, 4000);  
//   });
// }


// part1()
//   .then((message) => {
//     console.log(message);
//     return part2(message)
//   })
//   .then((message) => {
//     console.log(message);
//     return part3(message)
//   })
//   .then((message) => {
//     console.log(message);
//     return part4(message)
//   })
//   .then((message) => {
//     console.log(message);
//     return part5(message)
//   })
//   .then((message) => {
//     console.log(message);
//     return part6(message)
//   })
//   .then((message) => {
//     console.log(message); 
//     return part7(message)
//   })
//   .then((finalMessage) => {
//     console.log(finalMessage);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// //// async/await

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// const fetchData = async () => {
//   try {
//     const result = await add(5, 7);
//     console.log('Result:', result);
//   } catch (error) {
//     console.error('Error', error);
//   }
// }

// fetchData();
// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number!');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }

// async function showMultiplication() {
//   try {
//     const result = await multiply(4, 5);
//     console.log('Result:', result);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// showMultiplication();
// function divide(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number!');
//       } else {
//         resolve(a / b);
//       }
//     }, 500);
//   })
// }


// async function doMultipleThings() {
//   try {
//     const step1 = await divide(81, 3);
//     console.log('Step 1:', step1);

//     const step2 = await divide(step1, 9);
//     console.log('Step 2:', step2);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// doMultipleThings();


// fetch api 

const fetchUser = async () => {
  try {
    const response = await fetch('https://api.github.com/users/AP-Lett')

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`)
    }

    const userData = await response.json();
    console.log(`${userData.login} has ${userData.public_repos} public GitHub repos!`);

    console.log(userData);

  } catch (error) {
    console.log(error);
  }
}

fetchUser();


// function fetchUserData(userId) {
//   // Return a new Promise
//   return new Promise((resolve, reject) => {
//     // Use fetch (built-in in modern browsers, Node 18+, or via polyfill)
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((response) => {
//         if (!response.ok) {
//           // If we get an HTTP error (e.g., 404), reject with an error
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Otherwise, parse and return JSON data
//         return response.json();
//       })
//       .then((data) => {
//         // Resolve the Promise with the fetched user data
//         resolve(data);
//       })
//       .catch((error) => {
//         // Reject the Promise if any error occurs
//         reject(error);
//       });
//   });
// }

// // How to use this function:
// fetchUserData(1)
//   .then((user) => {
//     console.log('User data:', user);
//   })
//   .catch((err) => {
//     console.error('Error fetching user:', err);
//   });