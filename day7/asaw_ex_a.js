function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' | typeof b !== 'numner') {
        reject("Both arguments must be numbers.");
      } else {
        resolve(a + b); 
      }
    }, 3000);
  });
}

async function displaySum(a, b) {
  try {
    const sum = await addNumbers(a, b);
    console.log("Sum:", sum);
  } catch (error) {
    console.error("Error:", error);
  }
}


console.log("Calculating sum...");
displaySum(5, 10);
displaySum(5, "ten");